import { useEffect, useState } from "react";

const MyCheckbox = (props) => {
    
    const [checkBoxValue, setCheckBoxValue ] = useState(false);

    const checkBoxOnChange = (event)=>{
        setCheckBoxValue(event.target.checked);
    }
    
    useEffect(()=>{
        props.runAtFirstInit();
    },[])

    return (
        <>
            <p htmlFor={props.name} >{props.text}</p>
            <input 
                type="checkbox" 
                name={props.name} 
                //onChange={checkBoxOnChange}
                //onChange={props.checkEvent}
                onChange={(event)=>{
                    
                    props.checkEvent(event);
                    props.sendDataToParent('veli')
                    checkBoxOnChange(event);
                }}
            />
            { <strong>{checkBoxValue ? 'CHECKED': 'NON-CHECKED'}</strong> }
        </>
    )

}

export default MyCheckbox
