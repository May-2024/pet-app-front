import React from "react";
import "./Card.css";
import { IoPawSharp } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import {Hueso} from "../Hueso/Hueso"

export function Card({ object }) {

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
              <p><IoPawOutline /> Genero: <span>{object.gender}</span></p>
              <p><IoPawSharp /> Edad: <span>{object.age}</span></p>
              <p> <IoPawOutline /> Ubicación: <span>{object.ubicacion}</span></p>
              <p><IoPawSharp /> Contacto: <span>{object.contacto}</span></p>
            </div>
            <div className="button-container">
              <button className="adopt-button">Adoptar</button>
            </div>
          </div>
        ) : (
          <div className="card-info-container">
            <Hueso/> 
          <div className="card-pets-container">
            <p><IoPawSharp /> Nombre: <span>{object.name}</span></p>
            <p><IoPawOutline /> Edad: <span>{object.age}</span></p>
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
}
