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
    <div className='pageWrapper'>
      <header className='header'>CV generator</header>
      <InputForm
      className='myForm'
      isEditable={isEditable}
      setIsEditable={setIsEditable}
      formData={formData}
      setFormData={setFormData}/>

      <CvDisplay
      className='cvDisplay'
      formData={formMemo}/>
      <div className='cvFooter'>
        <DownloadButton formData={formMemo}/>
      </div>
      <footer
      className='footer'>By Luciano</footer>

    </div>

  )
}

export default App
