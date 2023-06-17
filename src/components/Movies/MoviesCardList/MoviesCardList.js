import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { cards } from "../../../utils/cards";
import "../MoviesCardList/MoviesCardList.css";

function MoviesCardList({ type }) {
  return (
    <section className="elements elements__page elements__page_saved">
      <ul className="elements__list">
        {cards.map((card) => (
          <MoviesCard key={card._id} card={card} type={type} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
