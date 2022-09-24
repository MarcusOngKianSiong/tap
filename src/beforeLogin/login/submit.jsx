import React from "react";


export default function Inputs(prop){
    return(
        <input type="submit" value="Login" onClick={prop.handleLogin}/>
    )
}