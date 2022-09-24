import React from "react";

export default function Cancel(prop){
    return(
        <input type="button" value="Cancel" onClick={prop.handleCancel}/>
    )
}
