import React from "react";
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import EditPicture from "./editPicture";

const urlEndpoint = 'https://ik.imagekit.io/q9sqgqprj/';

const IMAGEKIT_PUBLIC_KEY= 'public_f15xTNeNxI0Gzft+FYRwwUzlmrc=';
const IMAGEKIT_URL_ENDPOINT='https://ik.imagekit.io/q9sqgqprj';

export default function ProfilePicture(prop){
    console.log("----------------PROFILE SCRIPT: Profile picture-----------------"); 
    console.log("data: ", prop.data); 
    console.log("state: ",prop.state); 
    console.log("HandleProfilePictureClick: ",prop.handleProfilePictureClick)
    console.log("-----------------------------------------------"); 

    const picture = [<EditPicture/>];

    return (
        <div>
            <img src={prop.data.profilePicture} onClick={()=>{prop.handleProfilePictureClick()}}/>
        </div>
        
    )
}