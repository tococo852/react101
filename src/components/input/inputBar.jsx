import { useState } from "react";

const InputBar =({label,fieldKey,value,changeValue,isEditable})=>{

    return <>
            <label> {label}</label>
            {isEditable?(
                 <input type="text" value={value}
            onChange={(e)=>{changeValue(e.target.value,fieldKey)}}/>

            ):(
                <p>{value}</p>
            )}
           
            </>

}

export {InputBar}