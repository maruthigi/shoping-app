import { Register } from "./register"
import { Login } from "./Login"
import {Details} from "./details"

import { Home } from "./home"
import { BrowserRouter,Route,Routes } from "react-router-dom"

export const App=()=>{
    return(
        <>
        <BrowserRouter basename="/" >
        <Routes>
            <Route exact  path="/" element={<Register></Register>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="details" element={<Details></Details>}></Route>
           
        </Routes>
        </BrowserRouter>
        </>
    )
}