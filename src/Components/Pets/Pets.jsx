import { useEffect, useState } from "react";
import { Card } from "../../Components/Card/Card";
import axios from "axios";
import "./Pets.css";

export function Pets() {
  const [petsData, setPetsData] = useState([]);

  const fetchApiData = async () => {
    const apiCall = await axios.get("http://localhost:3000/api-pets/v1/pets");
    console.log(apiCall.data.data);
    setPetsData(apiCall.data.data);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

 
  return (
    <div className="pets-container">

          {petsData.length === 0 ? (
            <h3>Aun no tienes mascoticas</h3>
          ) : (
            <div className="pets-card-container">
        
              {petsData.map((pet) => (
                <Card key={pet.id} object={pet} />
              ))}
            </div>
          )}

     
    </div>
  );
}
