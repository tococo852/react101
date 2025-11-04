import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputForm } from './components/form/inputForm'
import { CvDisplay , DownloadButton} from './components/CVdisplay/CVdisplay'
import { useMemo } from 'react'
function App() {
    const [isEditable, setIsEditable] = useState(true)
    const [formData, setFormData]=useState({
        name:'default',
        email:'default',
        phone:'default',
        school:'default',
        title:'default',
        egress:'default',
        experience:'default'

    })

    const formMemo= useMemo(()=>{return formData},[isEditable])

  return (
    <>
      <header>CV generator</header>
      <InputForm
      isEditable={isEditable}
      setIsEditable={setIsEditable}
      formData={formData}
      setFormData={setFormData}/>
      <CvDisplay
      formData={formMemo}
      isEditable={isEditable}/>
      <DownloadButton formData={formMemo}/>
      <footer>By Luciano</footer>

    </>

  )
}

export default App
