import React from "react";
import "./Navbar.css";

const Navbar = (props)=> {
    console.log(props);
    return(
        <>
        <nav className="barra">
            <h1> {props.nombreDeLaTienda}</h1>
            <h1> {props.subtitulo}</h1>
            
        {/* <button onClick={props.darBienvenida}>Saludame</button> */}
        </nav>
        <button onClick  = {props.desplegableProductos} className="desplegable">Productos</button>
        </>
    );
};
export default Navbar;