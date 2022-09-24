import React from "react";

export default function VisitorView(prop){

    console.log("-------------VISITOR VIEW-------------")
    console.log(prop.data)
    console.log("----------------------------------------")

    const data = []
    for(const key in prop.data){
        if(key !== "profilePicture"){
            data.push(<h1 id={key}>{prop.data[key]}</h1>)
        }
        if(key === "profilePicture"){
            data.push(<img id={key} src={prop.data[key]}/>)
        }
    }

    return(
        <div>
           {data} 
        </div>
    )
}