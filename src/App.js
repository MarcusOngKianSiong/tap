import logo from './logo.svg';
import './App.css';
import React, {useState,useRef,useEffect} from 'react';
import BeforeLogin from './beforeLogin/beforeLogin';
import AfterLogin from './afterLogin/afterLogin';
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

const link = 'http://localhost:3000/users/login'

function App() {
  
  const [beforeOrAfterLogin,setbeforeOrAfterLogin] = useState(null);
  const [authorisation,setAuthorisation] = useState(null);
  
  const email = useRef();
  const password = useRef();
  
  const handleLogin = async () => {
    
    console.log("HANDLING LOGIN.....");
    // console.log("Email: ",email.current.value);
    // console.log("Password: ",password.current.value);
    const loginDetails = JSON.stringify({
      "email": email.current.value,
      "password": password.current.value
    })
    const additionalData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: loginDetails
    }

    await fetch(link,additionalData)
    .then((res)=>{return res.json()})
    .then((res)=>{
      console.log("Checking Token: ",res);
      setAuthorisation(res.token);
    })
  }
  
  useEffect(()=>{
    
  },[])

  useEffect(()=>{
    console.log("CHANGING PAGE.....",authorisation)
    if(authorisation === null || authorisation === undefined){
      setbeforeOrAfterLogin([<BeforeLogin emailReference={email} passwordReference={password} handleLogin={handleLogin}/>])
    }
    if(authorisation !== null && authorisation !== undefined){
      setbeforeOrAfterLogin([<AfterLogin authorisation={authorisation}/>])
    }
  },[authorisation])
  
  return (
    <div className="App">
      {beforeOrAfterLogin}
    </div>
  );
}

export default App;
