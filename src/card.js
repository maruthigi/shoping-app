import { useState } from "react"
import {data} from "./data"

import { Register } from "./register"
import { Login } from "./Login"
import { Home } from "./home"
import { json } from "react-router-dom"






export const Card=()=>{
  
const[cart,setCart]=useState([])
    
    function addcart(i){
   setCart([...cart,{...i}])
   alert("item add in cart please check")
    }
    function addcart1(i){
        const value=cart.find((x)=>{
            if(x.id === i.id){
                return true
            }else{
                return false
            }
        })
        return value
    }
    function filter1(i){
const arr=cart.filter((x)=>{
    if(x.id != i.id){
        return x
    }
})
setCart(arr)
    }
    return(
        <>
        
<div className="row">
{
    data.map((item)=>
    <div className="col-md-3" key={item.id}>
        <div className="card" style={{width:"14rcm"}}>
            <img className="card-img-top" src={item.img} alt='card image loding'></img>
            <div className="card-body">
                <center>
                    <h2 className="card-title">{item.name}</h2>
                    <p className="card-text">{item.price}</p>
                   {
                    addcart1(item) && (<button onClick={()=>{}} className="btn btn-dark">Itemincart</button>)
                   }
                   {
                    !addcart1(item) && (<button onClick={()=>addcart(item)} className="btn btn-primary">addcart</button>)
                   }
                </center>
            </div>
            </div>
    </div>)
}
</div>

<center style={{fontSize:"xx-large"}}>cartpage:{cart.length}</center>

<table className="table">
    <thead>
       <tr>
        <th>image</th>
        <th>name</th>
        <th>price</th>
        <th>delete</th>
       </tr>
    </thead>
    <tbody>
        
            {
                cart.map((x)=><tr key={x.id}>
                    <td><img src={x.img} style={{width:"100px"}}></img></td>
                    <td>{x.name}</td>
                    <td>{x.price}</td>
                    <td><button className="btn btn-dark" onClick={()=>filter1(x)} >delete</button></td>
                </tr>)
            }
      
    </tbody>
</table>
        </>
    )
}