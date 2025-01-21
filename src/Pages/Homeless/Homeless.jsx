import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import axios from "axios";

import "./Homeless.css";

export function Homeless() {
  return (
    <div className="homeless-container">
      <Card object={{name: "cami", }} />
      
    </div>
  );
}
