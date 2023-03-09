import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Profiler } from "react"

import { BrowserRouter, Routes,Route,Link } from "react-router-dom"
import { Card } from "./card"
import "./App.css"
export const Home=()=>{
    const name=localStorage.getItem("name")
   return(
    <>
    <div className="navbar nabar-light bg-light navbar-expand-md">
        <a href="" className="navbar-brand" style={{fontSize:"xx-large",}} id="logo">Amigos</a>
    
    
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="menu">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<Link to="/details" style={{textDecoration:"none",fontSize:"x-large",color:"black"}}>profile</Link>
</li>

</ul>
        </div>

    </div>
   <Card></Card>
    </>
   )
    
}