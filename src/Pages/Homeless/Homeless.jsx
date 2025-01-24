import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import axios from "axios";

import "./Homeless.css";

export function Homeless() {
  const [homelessData, setHomelessData] = useState([]);

  const fetchApiData = async () => {
    const apiCall = await axios.get(
      "http://localhost:3000/api-pets/v1/homeless"
    );
    console.log(apiCall.data.data);
    setHomelessData(apiCall.data.data);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="homeless-container">
      <div className="h-imagen-input-container">
      <figure>
          <img src="perry-official-Photoroom.png" />
        </figure>
        <figure>
          <img src="michi-3-Photoroom.png" />
        </figure>
        
        <div className="h-filtro-container">
          <input className="homeless-filtro" />
        </div>
        <figure>
          <img src="michi-2-Photoroom.png" />
        </figure>
        <figure>
          <img src="perry-serio-Photoroom.png" />
        </figure>

      </div>
      {homelessData.length === 0 ? (
        <h3>Todas las mascotas tienen un hogar</h3>
      ) : (
        <div className="homeles-card-container">
          {homelessData.map((homeless) => (
            <Card key={homeless.id} object={homeless} />
          ))}
        </div>
      )}
    </div>
  );
}
