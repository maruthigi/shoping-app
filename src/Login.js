import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

import "./reg.css"
export const Login=()=>{
    const confirmname =useRef("")
    const confirmpassword=useRef("")
 const a=   localStorage.getItem("name")
 const b=   localStorage.getItem("password")
 const u=useNavigate()
 useEffect(()=>{
   if( localStorage.getItem("auth")){
    u("/home")
   }
 },[])
 
    function login(event){
        event.preventDefault()
        if(confirmname.current.value !=a){
            alert("please enter your register name")
        }
        else if(confirmpassword.current.value != b){
            alert("please your register password")
        }
        else{
            alert("suceeefully your logged")
            u("/home")
            localStorage.setItem("auth","maruthi")
        }
       
    }
    return(
        <>
        <div className="container" id="reg1">
            <center id="logo"><strong>Amigos</strong></center>
<h2>Login</h2>
<form onSubmit={login}> 
    <label>Name:</label>
    <input type="text" ref={confirmname} placeholder="Enter Your Name" className="form-control"></input>
    <label>Password:</label>
    <input type="password" ref={confirmpassword} className="form-control" placeholder="Enter Your Password"></input>
    <input type="submit" className="btn btn-primary" value="Add"></input>

</form>
<p>You Dont Have Account Please <Link to="/" style={{textDecoration:"none",fontSize:"x-large"}}>Register</Link></p>
        </div>
        </>
    )
}