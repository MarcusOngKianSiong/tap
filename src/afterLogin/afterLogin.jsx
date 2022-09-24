import React, {useState,useRef,useEffect} from 'react';
import Profile from './profile/profile';
import VisitorView from './visitor_view/visitorView';
import Cancel from './profile/fields/UserDetails/cancel';
import EditPicture from './profile/fields/ProfilePicture/editPicture';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    useNavigate,
    Navigate,
    useHistory,
} from "react-router-dom";

import { waitForElementToBeRemoved } from '@testing-library/react';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import { getSpaceUntilMaxLength, hasPointerEvents } from '@testing-library/user-event/dist/utils';

export default function AfterLogin(prop){

    
    const [profileData,setProfileData] = useState({})
    const [state,setState] = useState({});
    const [cancelButton,setCancelButton] = useState(null);
    const [editProfilePicturePanel,setEditProfilePicturePanel] = useState(null);
    
    const references = {
        nameReference: useRef(),
        contactReference: useRef(),
        emailReference: useRef()
    }
    
    
    const removeEditProfilePicturePanel = () => {
        setEditProfilePicturePanel(null);
    }
    const createEditProfilePicturePanel = () => {
        setEditProfilePicturePanel(<EditPicture profilePicture={profileData.url} handleCancelEditPicture={removeEditProfilePicturePanel} />);
    }
    

    const handleProfilePictureClick = () => {
        if(state.profileSubmitOrEdit === "edit"){
            console.log("UNEDITABLE!!!!")
        }
        if(state.profileSubmitOrEdit === "submit"){
            createEditProfilePicturePanel()
        }
    }

    // 1. When the button is a submit button, then display the cancel button.
    // 2. When there is a 

    const handleCancel = () => {
        console.log("Handle cancel (Show state): ",state)
        const newState = {...state};
        newState.profileSubmitOrEdit = "edit"
        setState(newState);
        // change submit to edit
        // setState()
        // Remove the cancel button
        removeCancel()
        // Call upon the backend for the data
        getProfileData();
    }
    const createCancel = () => {
        setCancelButton([<Cancel handleCancel={handleCancel}/>]);
    }
    const removeCancel = () => {
        setCancelButton(null); 
    }

    

    const handleInputChange = (dataName,data) => {
        console.log("CHECKING INPUT CHANGE!!!!")
        console.log("DataName: ",dataName);
        console.log("Data: ",data)
        const newProfileDisplayData = {...profileData};
        newProfileDisplayData[dataName.toLowerCase()] = data;
        setProfileData(newProfileDisplayData);
    }
    // GET DATA FROM BACKEND
    // console.log("CHECKING AUTHORISATION AFTER LOGIN: ",prop.authorisation); 
    const getProfileData = async () => {
    //     console.log("CHECKING AUTHENTICATION DETAILS: ",prop.authorisation);
    //     const details = {
    //         header: {'Authorization': prop.authorisation}
    //     }
    //     await fetch('http://localhost:3000/profile',details)
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         console.log(res);
    //     })
        const data = {
            "_id": "62f50f6879e00c60c8ca12c1",
            "rfid": "d01482a5-49ca-40ad-ba17-d4ae3dabb4da",
            "email": "a@a.com",
            "hash": "$2b$10$oXuNXPcZeGKVpaz0X.xkMeWsPjgWJubZtkAsQNfvMbgWv1wlLrmZy",
            "name": "laj1221",
            "contact": 12,
            "url": "https://ik.imagekit.io/q9sqgqprj/tr:n-ik_ml_thumbnail/user_avatars/cat-women_xLvGndIW8.jpeg",
            "__v": 0,
            "github": "lkmh",
            "instagram": "",
            "telegram": "lk1029",
            "whatsapp": "",
            "links": []
        }
        setProfileData(data)
    }
    const setInitialState = () => {
        const state = {
            profileSubmitOrEdit: "edit",
            readOnlyInputFields: true,
        }
        setState(state);
    }

    const handleEditOrSubmit = () => {
        const newState = {...state};
        if(state.profileSubmitOrEdit === "edit"){
            newState.profileSubmitOrEdit = "submit";
            newState.readOnlyInputFields = false;
            createCancel();
        }
        if(state.profileSubmitOrEdit === "submit"){
            newState.profileSubmitOrEdit = "edit";
            newState.readOnlyInputFields = true;
            removeCancel();
            // SEND THE DATA REFERENCES TO THE DATABASE!!!!!
            console.log("Checking name reference: ",references.nameReference.current.value)
            console.log("Checking email reference: ",references.emailReference.current.value)
            console.log("Checking contact reference: ",references.contactReference.current.value)
        }
        setState(newState);
    }
    
    useEffect(()=>{
        getProfileData(); 
        setInitialState();
    },[])
    useEffect(()=>{
        console.log("CHECKING STATE: ",profileData);
    },[profileData])

    return(
        <div>
            <Router>

                <div>
                    <Link to="/profile">Profile</Link>
                    <Link to="/visitorview">Visitor View</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                
                <Routes>
                    
                    <Route path="/profile" element={<Profile 
                        data={{
                            profilePicture: profileData.url,
                            name: profileData.name,
                            email: profileData.email,
                            contact: profileData.contact
                        }} 
                        state={state}
                        references={references}
                        handleEditOrSubmit={handleEditOrSubmit}
                        handleInputChange={handleInputChange}
                        cancelButton={cancelButton}
                        editProfilePicturePanel={editProfilePicturePanel}
                        handleProfilePictureClick={handleProfilePictureClick}
                    />}/>
                    <Route path="/visitorview" element={<VisitorView 
                        data={{
                            profilePicture: profileData.url,
                            name: profileData.name,
                            email: profileData.email,
                            contact: profileData.contact
                        }}
                    />}/>
                    {/* <Route path="/logout" element={<Register/>}/> */}
                </Routes>
                
            </Router>
        </div>
        
    )
}
