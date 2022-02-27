import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ukFlag from "../../images/uk.png";
import portugalFlag from "../../images/portugal-flag.svg";
import { useState } from "react";
import i18next from "i18next";

function Navbar({ languages }) {
  //refreshing the page when clicking on the home button in the homepage.
  const refreshPage = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();



  //display different flag if translation is active
  const [showEnglish, setShowEnglish] = useState(false);
  const [showPortuguese, setShowPortuguese] = useState(true);

  //function to change the translation when clicking on the flag
  const changeToEn = () => {
    setShowEnglish(true);
    setShowPortuguese(false);
  };

  const changeToPt = () => {
    setShowEnglish(false);
    setShowPortuguese(true);
  };

  return (
    <div className="container">
      {/* this should be a header */}
      <header className="header">
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          {/* Hamburguer using span */}
          <span></span>
        </label>

        <div className="logo">
          <h1>
            <Link to="/" className="my-name" onClick={refreshPage}>
              Fabio.G
            </Link>
          </h1>
        </div>

        <nav className="nav-container">
          <a href="#about-me">{t("About me")}</a>
          <a href="#projects">{t("Projects")}</a>
          <a href="#contact-me">{t("Contacts")}</a>
          {showPortuguese && (
            <img
              src={portugalFlag}
              alt="portugal-flag"
              className="flag"
              onClick={() => {
                i18next.changeLanguage("pt");
                changeToEn();
              }}
            />
          )}

          {showEnglish && (
            <img
              src={ukFlag}
              alt="uk-flag"
              className="flag"
              onClick={() => {
                i18next.changeLanguage("en");
                changeToPt();
              }}
            />
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
