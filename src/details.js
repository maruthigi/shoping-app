import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Details=()=>{
    const k=useNavigate()
    const[show,setShow]=useState(false)
    const name=localStorage.getItem("name")
    useEffect(()=>{
     if(!localStorage.getItem("auth")){
        k("/login")
     }
    },[show])
    const logout=()=>{
        localStorage.removeItem("auth")
        setShow(true)
    }
    return(
        <>
        <center>
       <h2>welcome:{name}</h2>
       <button onClick={logout} className="btn btn-dark">logout</button>
        </center>
        </>
    )
}