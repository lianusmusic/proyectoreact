import React from "react";
import "./Navbar.css";
import Cart from "../Cart/CartWidget";

let Navbar = (props)=> {
    console.log(props);
    return(
        <>
        <nav className="barra">
            <h1> {props.nombreDeLaTienda}</h1>
            <h2> {props.subtitulo}</h2>
            <p className ="navMenu"> About TCA </p>
            <p className ="navMenu">Digital Education</p>
            <button onClick  = {props.desplegableProductos} className="loginBut">Login</button>
            <button onClick  = {props.desplegableProductos} className="loginBut">Sign Up</button>
            <Cart/>
        </nav>
       
        </>
    );
};
export default Navbar;