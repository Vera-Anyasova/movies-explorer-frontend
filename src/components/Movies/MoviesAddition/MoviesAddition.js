import React from "react";

import "../MoviesAddition/MoviesAddition.css";

function MoviesAddition({ type }) {
  return (
    <section className={`moviesAddition moviesAddition-${type}`}>
      <div
        className={`moviesAddition__element moviesAddition__element-${type}`}
      >
        Ещё
      </div>
    </section>
  );
}

export default MoviesAddition;
