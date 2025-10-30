
import { useState } from "react"
import { InputBar } from "../input/inputBar"

const InputForm=()=>{
    const [isEditable, setIsEditable] = useState(true)
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        school:'',
        title:'',
        egress:''

    })

    const changeValue=(value,valueKey)=>{
        setFormData(prevData=>({...prevData,[valueKey]:value}))
    }

    const editToggle =(e)=>{
        e.preventDefault()
        setIsEditable(prev=>(!prev))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        editToggle(e)
    }


    return <form className='myForm' onSubmit={handleSubmit}>

        <h4>Contact info</h4>
        <InputBar label='name' 
        fieldKey='name'
        value={formData['name']}
        changeValue={changeValue}
        isEditable={isEditable}/>

        <InputBar label='email' 
        fieldKey='email'
        value={formData['email']}
        changeValue={changeValue}
        isEditable={isEditable}/>

        <InputBar label='phone' 
        fieldKey='phone'
        value={formData['phone']}
        changeValue={changeValue}
        isEditable={isEditable}/>
        <h4>Experience</h4>
        <InputBar label='school' 
        fieldKey='school'
        value={formData['school']}
        changeValue={changeValue}
        isEditable={isEditable}/>

        <InputBar label='title' 
        fieldKey='title'
        value={formData['title']}
        changeValue={changeValue}
        isEditable={isEditable}/>

        <InputBar label='egress' 
        fieldKey='egress'
        value={formData['egress']}
        changeValue={changeValue}
        isEditable={isEditable}/>
        {isEditable?(
            <button type='submit'
            >Submit</button>
        ):(
        <button type='button' onClick={editToggle}>edit</button>
        )}
        </form>



}

export {InputForm}
