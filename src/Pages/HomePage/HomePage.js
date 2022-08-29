import { useLayoutEffect } from "react";
import AboutMeText from "../../Components/AboutMeText/AboutMeText";
import "../../Components/Navbar/Navbar.css";
import myPic from "../../images/fab.jpg";
import "./HomePage.css";
import hybridboxImage from "../../images/hybridboxsite.png";
import spacerunnerImage from "../../images/spacerunnersite.png";
import thegamelistImage from "../../images/thegamelistsite.png";
import worldbikeImage from "../../images/worldbike.png";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";
import github from "../../images/github.svg";

/* import AOS from 'aos'; */
import "aos/dist/aos.css";

import { logos } from "../../Models/stackLogos/stackLogos";

function HomePage() {
  //hook to restart the page on the top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  //translation hook
  const { t } = useTranslation();

  const renderLogos = logos.map((logo) => {
    return (
      <div className="tech-box">
        <img
          key={logo.title}
          src={logo.image}
          alt="language-logo"
          className="language-logo"
        />
        <p className="languageName">{logo.title}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="intro-wrapper">
          <section className="intro">
            <img src={myPic} alt="my-intro-pic" className="my-pic"></img>
            <div className="intro-text">
              <h1>{t("I am Fábio Guerreiro")}</h1>

              <h2>
                Jr. Fullstack Web Developer
                <small className="alpha-code">PT</small>
              </h2>
            </div>

            {/* <img src={bgImage} alt="bg-header" className="bg-image" /> */}
          </section>
        </div>
        <section className="my-tech">
          <h2 id="tech-stack">{t("My Tech Stack")}</h2>

          <div className="tech-container">
            {renderLogos}
          </div>
        </section>
        <span className="split"></span>
        <article className="about-me" id="about-me">
          <h2>{t("About")}</h2>
          <div className="about-me-wrapper">
            <div
              className="about-me-text"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1400"
            >
              <AboutMeText />
            </div>
          </div>
        </article>

        <section className="my-projects" id="projects">
          <h2 className="myprojects-title">{t("My Projects")}</h2>

          <div className="my-projects-wrapper">
            <div className="project-box">
              <div className="image-container">
                <img
                  src={worldbikeImage}
                  alt="project-logo"
                  className="project-image"
                  id="gamelist"
                />
                <div className="overlay"></div>
                <div className="hover-btn">
                  <a
                    href="https://worldbike-geolocation.netlify.app/"
                    alt="project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="project-text-container">
                <div className="project-title-wrapper">
                  <h3 className="project-title">World Bike</h3>
                  <a
                    href="https://github.com/Fabio-FG/geolocation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github-repo" />
                  </a>
                </div>

                <p className="project-text">
                  {t(
                    "An app where you can search for bike networks and stations worldwide and see which ones are available. The main focus was handling API calls and fetching live data. Additionally, another main feature is that the app website is bilingual."
                  )}
                </p>
              </div>
            </div>
            <hr className="hr-project"></hr>

            <div className="project-box">
              <div className="image-container">
                <img
                  src={thegamelistImage}
                  alt="project-logo"
                  className="project-image"
                  id="gamelist"
                />
                <div className="overlay"></div>
                <div className="hover-btn">
                  <a
                    href="https://gamelistproject.herokuapp.com/"
                    alt="project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="project-text-container">
                <div className="project-title-wrapper">
                  <h3 className="project-title">TheGameList</h3>
                  <a
                    href="https://github.com/YFarias/Ironhacker---Project-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github-repo" />
                  </a>
                </div>

                <p className="project-text">
                  {t(
                    "An app where you can list your game in a database built with MongoDB, NodeJS, Express and Handlebars. The focus was in implementing CRUD."
                  )}
                </p>
              </div>
            </div>
            <hr className="hr-project"></hr>
            <div className="project-box">
              <div className="image-container">
                <img
                  src={hybridboxImage}
                  alt="project-logo"
                  className="project-image"
                  id="gamelist"
                />
                <div className="overlay"></div>
                <div className="hover-btn">
                  <a
                    href="https://hybridbox.netlify.app/"
                    alt="project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="project-text-container">
                <div className="project-title-wrapper">
                  <h3 className="project-title">HybridBox</h3>
                  <a
                    href="https://github.com/Fabio-FG/HybridBox-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github-repo" />
                  </a>
                </div>

                <p className="project-text">
                  {t(
                    "This is a full stack app where you can customise streaming services and handpick your favourite channels and streams. It was built with React, MongoDB, NodeJS and Express."
                  )}
                </p>
              </div>
            </div>
            <hr className="hr-project"></hr>
            <div className="project-box">
              <div className="image-container">
                <img
                  src={spacerunnerImage}
                  alt="project-logo"
                  className="project-image"
                  id="gamelist"
                />
                <div className="overlay"></div>
                <div className="hover-btn">
                  <a
                    href="https://spacerunner-thegame.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    alt="project"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="project-text-container">
                <div className="project-title-wrapper">
                  <h3 className="project-title">Space Runner</h3>

                  <a
                    href="https://github.com/Fabio-FG/SpaceRunner-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github-repo" />
                  </a>
                </div>

                <p className="project-text">
                  {t(
                    "This is a game built with Canvas, CSS and JavaScript. The main focus was the usage of JavaScript classes and methods with basic OOP knowledge."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
