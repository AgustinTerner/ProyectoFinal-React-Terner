import React from "react";
import Imageninicio from "./Components-Imgs/imgs-inicio/quilmes-cervezas.png"
import "./Components-Styles/Inicio.scss"

export const Inicio = () => {
    return (
        <>
            <div className="inicio">
                <img src={Imageninicio} alt="imagen inicio" />
            </div>
        </>
    );
}