import { useState } from "react";
import "../styles/Products.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";

function Card({producto}){

    return(
        <div className="product-card" >
            <h2 style={{color:"white"}}>{producto.name}</h2>
            <Link to={"/productos/"+ producto.id}><img className="product-image" src={producto.imagen}></img></Link>
            <p style={{color:"white"}}>{producto.price} $</p>
            <Link to={"/productos/" + producto.id} ><button style={{color:"white"}}>Ver detalles del producto</button></Link>
        </div>
    )
}

export default Card