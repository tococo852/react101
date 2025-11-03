import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputForm } from './components/form/inputForm'
import { CvDisplay , DownloadButton} from './components/CVdisplay/CVdisplay'
function App() {
    const [isEditable, setIsEditable] = useState(true)
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        school:'',
        title:'',
        egress:'',
        experience:''

    })

  return (
    <>
      <InputForm
      isEditable={isEditable}
      setIsEditable={setIsEditable}
      formData={formData}
      setFormData={setFormData}/>
      <CvDisplay
      formData={formData}
      isEditable={isEditable}/>
      <DownloadButton formData={formData}/>

    </>

  )
}

export default App
