import React from "react";

export default function Input(prop){
    return (
        <div>
            <label for={prop.dataName}>{prop.dataName}</label>
            <input type="text" id={prop.dataName} value={prop.value} ref={prop.reference} onChange={(event)=>{prop.handleInputChange(prop.dataName,event.target.value)}} readOnly={prop.readOnly}/>
        </div>
    )
}