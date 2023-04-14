import React from "react";
import styled from "./About.module.css";



export default function About(props){
    return(
        <div className={styled.container}>
            <h1>Esto es una prueba</h1>
            <p>Espacio para texto</p>
            <img src="https://www.supercoloring.com/sites/default/files/styles/drawing_full/public/fif/2017/09/batman-logo-printable-template-paper-craft.png" alt="" />
            <h3>Hola soy Diego</h3>
        </div>
    )
}