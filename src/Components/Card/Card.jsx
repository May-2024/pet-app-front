import React from "react";
import "./Card.css";
import { IoPawSharp } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import {Hueso} from "../Hueso/Hueso"

export function Card({ object }) {
  console.log(object);

  return (
    <div className="card-container">
      <div className="imagen-container">
        <img src="/perry-official.png" />
        </div>

      <div className="info-container">
        {object.ubicacion ? (
          <div className="card-info-container">
            <div className="card-p-container">
              <p>
              <IoPawSharp /> Animal: <span>{object.animal}</span>
              </p>
              <p><IoPawOutline /> Genero:</p>
              <p><IoPawSharp /> Edad:</p>
              <p> <IoPawOutline /> Ubicación: <span>{object.ubicacion}</span></p>
              <p><IoPawSharp /> Contacto:</p>
            </div>
            <div className="button-container">
              <button className="adopt-button">Adoptar</button>
            </div>
          </div>
        ) : (
          <div className="card-info-container">
            <Hueso/> 
          <div className="card-pets-container">
            <p><IoPawSharp /> Nombre:</p>
            <p><IoPawOutline /> Edad:</p>
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
}
