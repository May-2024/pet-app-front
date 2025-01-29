import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { Modal } from "../../Components/Modal/Modal";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import axios from "axios";

import "./Homeless.css";

export function Homeless() {
  const [homelessData, setHomelessData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newHomeless, setNewHomeless] = useState({
    age: "edad",
    animal: "",
    ubicacion: "",
    gender: "",
    contacto: "",
  });

  const [messageError, setMessageError] = useState("");
  const [showMessageError, setShowMessageError] = useState(false);
  const handleInputChange = (event) => {
    setNewHomeless({
      ...newHomeless,
      [event.target.name]: event.target.value,
    });
  };

  const fetchApiData = async () => {
    try {
      const apiCall = await axios.get(
        "http://localhost:3000/api-pets/v1/homeless"
      );
      // console.log(apiCall.data.data);
      setHomelessData(apiCall.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const createHomelessAxiosRequest = async () => {
    try {
      if (
        newHomeless.age === 0 ||
        newHomeless.animal === "" ||
        newHomeless.ubicacion === "" ||
        newHomeless.gender === "" ||
        newHomeless.contacto === ""
      ) {
        setMessageError("Todos los campos son obligatorios");
        setShowMessageError(true);
        return;
      }
      if (newHomeless.age < 0) {
        setMessageError("La edad de la mascota no puede ser menor que 0");
        setShowMessageError(true);
        return;
      }
      const apiCall = await axios.post(
        "http://localhost:3000/api-pets/v1/homeless",
        newHomeless
      );
      console.log(apiCall);
      if (apiCall.data.statusCode === 201) {
        setMessageError("Listo, ¡A encontrar un hogar!");
        setShowMessageError(true);
        setNewHomeless({
          age: "edad",
          animal: "",
          ubicacion: "",
          gender: "",
          contacto: "",
        });
      }
      fetchApiData();
    } catch (error) {
      console.error(error);
    }
  };

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
          <input className="homeless-filtro" placeholder="Busca por animal" />
          <button className="button-filtro">
            <PiMagnifyingGlassBold size={"1.8rem"} />
          </button>
        </div>
        <figure>
          <img src="michi-2-Photoroom.png" />
        </figure>
        <figure>
          <img src="perry-serio-Photoroom.png" />
        </figure>
        <button className="add-homeless-button">+</button>
      </div>
      {showModal && (
        <Modal
          title={"Registrar animal"}
          primaryButton={{
            primaryLabel: "Aceptar",
            onPrimaryClick: createHomelessAxiosRequest,
          }}
          secondaryButton={{
            secondaryLabel: "Cancelar",
            onSecondaryClick: setShowModal,
          }}
        >
          {showMessageError && <span>{messageError}</span>}
          <div className="form-input-container">
            <input
              type="text"
              placeholder="Ej: Gato, Perro, etc"
              name={"animal"}
              value={newHomeless.animal}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Edad"
              name={"age"}
              value={newHomeless.age}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="hembra o macho"
              name={"gender"}
              value={newHomeless.gender}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Ubicación"
              name={"ubicacion"}
              value={newHomeless.ubicacion}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Contacto"
              name={"contacto"}
              value={newHomeless.contacto}
              onChange={handleInputChange}
            />
          </div>
        </Modal>
      )}

      {homelessData.length === 0 ? (
        <h3>Todas las mascotas tienen un hogar</h3>
      ) : (
        <div className="homeles-card-container">
          {homelessData.map((homeless) => (
            <Card key={homeless.id} object={homeless} />
          ))}
        </div>
      )}
      <button 
        className="h-button-add-homeless"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
    </div>
  );
}
