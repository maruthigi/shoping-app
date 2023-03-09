import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./reg.css"
export const  Register=()=>{
  const name=useRef("")
  const password=useRef("")
  const cpassword=useRef("")
  const [error,setError]=useState("")
const navigator=useNavigate()
  function my(event){
    event.preventDefault()
    if(name.current.value<=6){
alert("please your name should be greter then 6 charecters")


    }
    else if(password.current.value!=cpassword.current.value){
alert("please enter password and confirm password should be same")
    }
    else{
      alert("sucessfull Regiter")
      localStorage.setItem("name",name.current.value)
      
      localStorage.setItem("password",password.current.value)
      localStorage.setItem('cpassword',cpassword.current.value)
     
    }
   
  }
  return(
    <>
    <div className="container" id="reg">
      <center id="logo"><strong>Amigos</strong></center>

      <h2>Register</h2>
      <form onSubmit={my}>
        <label>Name: </label>
      <input type='text' ref={name} placeholder="Enter Name" className="form-control"></input>
     
      <label>Password:</label>
      <input type="password" ref={password} className="form-control" placeholder="Enter Password"></input>
      <label>ConfirmPassword:</label>
      <input type="password" ref={cpassword} className="form-control" placeholder="Enter Confirm Password"></input>
      <input type="submit" className="btn btn-primary" value="Add"></input>

      </form>
      <p>You Have Account Please <Link to="/login" style={{textDecoration:"none",fontSize:"x-large"}}>Login</Link></p>
    </div>
    </>
  )
}