import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { generatePath } from "react-router-dom";
import Inputs from './input';



export default function UserDetails(prop){
    console.log("----------------PROFILE SCRIPT: UserDetails-----------------"); 
    console.log("data: ", prop.data); 
    console.log("state: ",prop.state); 
    console.log("-----------------------------------------------"); 
    return (

        <div>
            <Inputs dataName="Name" value={prop.data.name} handleInputChange={prop.handleInputChange} reference={prop.references.nameReference} readOnly={prop.state.readOnlyInputFields}/>
            <Inputs dataName="Contact" value={prop.data.contact} handleInputChange={prop.handleInputChange} reference={prop.references.contactReference} readOnly={prop.state.readOnlyInputFields}/>
            <Inputs dataName="Email" value={prop.data.email} handleInputChange={prop.handleInputChange} reference={prop.references.emailReference} readOnly={prop.state.readOnlyInputFields}/>
            <input type="button" value={prop.state.profileSubmitOrEdit} onClick={prop.handleEditOrSubmit}/>
            {prop.cancelButton}
        </div> 
        
    )
}