import { useEffect, useState } from "react";

const MyDropDown = (props) => {
    const [dataList, setDataList] = useState([]);

    const selectOnChange = (event)=>{
        console.log(event.target.value);
        props.onSelectChange(event.target.value);
    }
    
    useEffect(()=>{
        console.log(props.dataList);
    },[])

    return (
        <>
            <p htmlFor={props.name} >{props.text}</p>
            <select name={props.name} id={props.name} onChange={selectOnChange}>
                {
                    props.dataList && 
                    props.dataList.map(item =>{
                        return <option key={item} value={item.toLowerCase()}>{item}</option>
                    })
                }
                
            </select>
            
        </>
    )

}

export default MyDropDown
