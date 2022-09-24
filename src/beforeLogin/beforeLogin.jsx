
import Login from './login/login'
import Homepage from './homepage/homepage';
import Register from './register/register'
import React, {useState,useRef,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    useNavigate,
    Navigate,
    useHistory
  } from "react-router-dom";

export default function BeforeLogin(prop){
    return(
        <div>
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/login" element={<Login emailReference={prop.emailReference} passwordReference={prop.passwordReference} handleLogin={prop.handleLogin}/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
        
            </Router>
        </div>
    )
}