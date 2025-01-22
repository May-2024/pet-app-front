import React from 'react'
import { Card } from "../../Components/Card/Card";
import "./Pets.css";

export function Pets() {
  return (
    <div className='pets-container'>
      Pets
    <Card object={{name: "lala", age: 2}}/>
      </div>
  )
}
