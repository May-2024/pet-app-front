import React from "react";
import { Pets } from "../../Components/Pets/Pets";
import { IoPawSharp } from "react-icons/io5";
import { IoPawOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Users.css";

export function Users() {
  const [usersData, setUsersData] = useState([]);

  const fetchApiData = async () => {
    const apiCall = await axios.get("http://localhost:3000/api-pets/v1/users");

    const usersList = apiCall.data.data;
    const oneUserData = usersList.filter((user) => user.name === "maymay");
    setUsersData(oneUserData[0]);
    console.log(usersData);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="users-container">
      <div className="u-banner-container">
        <div className="user-card-container">
          <div className="u-image-container">
            <img src="pet-owner.jpeg" />
          </div>
          <div className="u-info-container">
            <h2>Acudiente perruno</h2>
            <div className="u-data-container">
              <p>
                <IoPawSharp /> Nombre: <span>{usersData.name}</span>
              </p>
              <p>
                <IoPawOutline /> Edad: <span>{usersData.age}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="u-pets-card-container">
        <Pets />
      </div>
    </div>
  );
}
