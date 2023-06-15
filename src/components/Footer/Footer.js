import React from "react";
import { useLocation } from "react-router-dom";

import "../Footer/Footer.css";

function Footer() {
  const location = useLocation();

  return (
    (location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies") && (
      <footer className="footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__item">
          <p className="footer__copyright">© 2023</p>
          <div className="footer__places">
            <span className="footer__place">Яндекс.Практикум</span>
            <span className="footer__place">Github</span>
          </div>
        </div>
      </footer>
    )
  );
}

export default Footer;
