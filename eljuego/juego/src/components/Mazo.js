import React from "react";
import Carta from "./Carta.js";

export default function Mazo(props) {
  
  return (
    <div className="card--container">
      {props.cards.map((carta) => (
        <Carta
          key={carta.id}
          id={carta.id}
          value={carta.value}
          palo={carta.palo}
          url={carta.url}
        />
      ))}
    </div>
  );
}
