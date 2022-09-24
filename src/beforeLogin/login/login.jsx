import React,{useEffect,useRef,useState} from "react";
import Inputs from './inputs'
import Submit from './submit'

export default function Login(prop){    
    const email = useRef();
    const password = useRef();
    const link = 'http://localhost:3000/users/login';
    return(
        <div>
            <h1>Login</h1>
            <Inputs dataName="Email" reference={prop.emailReference}/>
            <Inputs dataName="Password" reference={prop.passwordReference}/>
            <Submit handleLogin={prop.handleLogin}/>
        </div>
    )
}

