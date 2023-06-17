import React from "react";

import "../MoviesCard/MoviesCard.css";

function MoviesCard({ card, type }) {
  return (
    <li className="element">
      <img src={card.image} alt={card.name} className="element__photo" />
      <div className="element__place">
        <h2 className="element__title">{card.name}</h2>
        <button
          type="button"
          className={`element__button element__button_${type}`}
          aria-label="Отметить фильм."
        ></button>
      </div>
      <p className="element__time">{card.duration}</p>
    </li>
  );
}

export default MoviesCard;
