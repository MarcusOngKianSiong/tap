import React from "react";
import ProfilePicture from './fields/ProfilePicture/ProfilePicture.jsx'
import UserDetails from './fields/UserDetails/UserDetails.jsx'

export default function Profile(prop){
    console.log("----------------PROFILE SCRIPT-----------------"); 
    console.log("data: ", prop.data); 
    console.log("state: ",prop.state); 
    console.log("HandleProfilePictureClick: ",prop.handleProfilePictureClick)
    console.log("-----------------------------------------------"); 
    return(
        <form>
            <ProfilePicture data={prop.data} state={prop.state} handleProfilePictureClick={prop.handleProfilePictureClick} />
            {prop.editProfilePicturePanel}
            <UserDetails data={prop.data} state={prop.state} handleEditOrSubmit={prop.handleEditOrSubmit} handleInputChange={prop.handleInputChange} cancelButton={prop.cancelButton} references={prop.references}/>
        </form>
    )
}