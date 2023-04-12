import React from "react";
import { Link } from "react-router-dom";
import Logoquilmes from "./Components-Imgs/imgs-navbar/quilmes-logo.png"
import "./Components-Styles/Navbar.scss"
import "./Components-Styles/SwalLoader.scss"

export const Navbar = ({ contador }) => {
    return (
        <>
            <div className="contenedorNavbar">
                <div className="logo">
                    <Link to={"/"}><img src={Logoquilmes} alt="logo quilmes" /></Link>
                </div>
                <div className="productos">
                    <Link to={"/ProductosList"}><h2>PRODUCTOS</h2></Link>
                </div>
                <div className="carrito">
                    <Link to={"/Carrito"}>
                        <button>
                            <p>CARRITO</p>
                            <p>Productos: <span className="contador">{contador}</span></p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
