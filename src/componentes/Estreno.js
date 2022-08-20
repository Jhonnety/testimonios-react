import React from "react";
import '../stylesheets/Estreno.css'

function Estreno(props){
    return(
      <div className="contenedor-estreno">
        <img 
        className="imagen-estreno"
        src={require(`../imagenes/${props.foto}.jpg`)}
        alt={`foto de estreno de ${props.nombre}`}
        />
        <div className="contenedor-texto-estreno">
            <p className="nombre-estreno"><strong>{props.nombre}</strong> - Fecha de estreno : <b>{props.fecha}</b></p>
            <p className="nombre-genero-estreno"><b>Genero:</b> {props.genero}</p>
            <p className="descripcion-estreno">{props.descripcion}</p>
        </div>
      </div>
    );
}
export default Estreno;