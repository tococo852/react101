import { useState } from "react";

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Name: {formData.name}</Text>
        <Text>Email: {formData.email}</Text>
      </View>
    </Page>
  </Document>
);

const DownloadButton = ({ formData }) => (
  <PDFDownloadLink document={<MyDocument formData={formData} />} fileName="form.pdf">
    {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
  </PDFDownloadLink>
);


const CvDisplay=({formData, isEditable})=>{
    
    
    return <MyDocument formData={formData}/>

}

export {CvDisplay, DownloadButton}