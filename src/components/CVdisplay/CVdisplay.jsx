import { useState } from "react";

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet,PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textDecoration: 'underline',
  },
  text: {
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#888',
  },
});
const MyDocument = ({ formData }) => (
  <Document>
     <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>{formData.name || 'Your Name'}</Text>
      <Text style={styles.subHeader}>{formData.title || 'Professional Title'}</Text>
      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.text}>Email: {formData.email || 'example@email.com'}</Text>
        <Text style={styles.text}>Phone: {formData.phone || '123-456-7890'}</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>
          {formData.school || 'School Name'} — {formData.egress || 'Graduation Year'}
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.text}>{formData.experience || 'Describe your work experience here.'}</Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>by L CV Generator</Text>

      
    </Page>
  </Document>
);

const DownloadButton = ({ formData }) => (
  <PDFDownloadLink document={<MyDocument formData={formData} />} fileName="form.pdf">
    {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
  </PDFDownloadLink>
);



const CvDisplay=({formData})=>{
    
    
    return <div style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '80vh',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}>
          <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
            <MyDocument formData={formData} />
          </PDFViewer>
        </div>

}

export {CvDisplay, DownloadButton}