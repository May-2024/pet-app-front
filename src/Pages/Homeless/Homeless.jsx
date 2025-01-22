import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import axios from "axios";

import "./Homeless.css";

export function Homeless() {
  const myHomeless = [
    { id: 1, animal: "gato", ubicacion: "tales" },
    { id: 2, animal: "perro", ubicacion: "pascuales" },
    { id: 3, animal: "pollo", ubicacion: "alli" }
  ];
  // const myHomeless = [
  //   { name: "lala", ubicacion: "tales" },
  //   { name: "may", ubicacion: "pascuales" },
  //   { name: "michi", ubicacion: "alli" },
  //   { name: "perry", ubicacion: "alla" },
  //   { name: "munchi", ubicacion: "acuya" },
  //   { name: "leo", ubicacion: "tales" },
  //   { name: "cami", ubicacion: "tales" },
  // ];

  return (
    <div className="homeless-container">
      {myHomeless.length === 0 ? (
        <h3>Todas las mascotas tienen un hogar</h3>
      ) : (
        <div className="homeles-card-container">
          {myHomeless.map((homeless) => (
            <Card key={homeless.id} object={homeless} />
          ))}
        </div>
      )}
    </div>
  );
}
