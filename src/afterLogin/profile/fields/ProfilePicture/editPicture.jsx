import React from "react";
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

const urlEndpoint = null
const authentication = null
const publicKey = null;

export default function EditPicture(prop){
    console.log("Profile Picture: ",prop.profilePicture);
    return(
        <div>
            <img src={prop.profilePicture} />
            <IKUpload urlEndpoint={"http://localhost:3000/profile/uploadphoto"} onError={(message)=>{
                console.log("ERROR!!!!: ",message)
            }} onSuccess={
                console.log("SUCCESS!!!!")
            } />
            <input type="button" value="Cancel" onClick={()=>{prop.handleCancelEditPicture()}}/>
        </div>
    )
    
}