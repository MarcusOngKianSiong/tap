import React from "react";

export default function Inputs(prop){
    return(
        <div>
            <label for={prop.dataName}>{prop.dataName}</label>
            <input type="text" id={prop.dataName} ref={prop.reference}/>
        </div>
    )
}

