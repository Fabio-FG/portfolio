import "./HomePage.css";
import React from "react";
import myPic from "../../images/fab.jpg";
/* import bgImage from "../../images/andy-holmes-rCbdp8VCYhQ-unsplash.jpg"; */
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import htmlLogo from "../../images/htmllogo.svg";
import cssLogo from "../../images/css3.svg";
import javascriptLogo from "../../images/javascriptlogo.svg";
import nodeLogo from "../../images/nodejs.svg";
import reactLogo from "../../images/reactlogo1.svg";
import mongoLogo from "../../images/mongodb.svg";
import postmanLogo from "../../images/postman.svg";
import hybridboxlogo from "../../images/hybridbox-logo.png";
import atlaslogo from "../../images/atlas.png";
import gamelistLogo from "../../images/gamelist-logo.png";
import handlebarsLogo from "../../images/handlebars.svg";
import axiosLogo from "../../images/axios.svg";
import ContactForm from "../../Components/ContactForm/ContactForm";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    //toggling the previous value
    setShowModal((prev) => !prev);
  };

  return (
    <div className="container">
      <section className="intro">
        <img src={myPic} alt="my-intro-pic" className="my-pic"></img>
        <div className="intro-text">
          <h1>My name is Fábio Guerreiro</h1>
          <h2>
            Jr. Fullstack Web Developer<small className="alpha-code">PT</small>
          </h2>
        </div>
        {/*  <img src={bgImage} alt="bg-header" className="bg-image" /> */}
      </section>
      <section className="my-tech">
        <h2>My Tech Stack </h2>
        <div className="tech-container">
          <div className="tech-box">
            <img src={htmlLogo} alt="html" className="language-logo" />
          </div>

          <div className="tech-box">
            <img src={cssLogo} alt="css" className="language-logo" />
          </div>

          <div className="tech-box">
            <img
              src={javascriptLogo}
              alt="javascript"
              className="language-logo"
            />
          </div>

          <div className="tech-box">
            <img src={reactLogo} alt="reactJS" className="language-logo" />
          </div>

          <div className="tech-box">
            <img src={nodeLogo} alt="nodeJS" className="language-logo" />
          </div>

          <div className="tech-box">
            <img src={mongoLogo} alt="mongoDB" className="language-logo" />
          </div>

          <div className="tech-box">
            <img src={handlebarsLogo} alt="handlebars" className="language-logo" />
          </div>
        </div>
      </section>
      <span className="split"></span>
      <article className="about-me" id="about-me">
        <h2>About me</h2>
        <div className="about-me-wrapper">
          <div className="about-me-text">
            <p>
              {" "}
              I am a Web Developer based in Lisbon, Portugal and I am also an
              aspiring manga artist. I first started to deal with the world of
              tech in 2014 when I did a multimedia course in Lisbon. Although I
              did not pursue a career in the big world of tech at the time I was
              always keeping an eye on it and after completing a bachelor's and
              a master's degree in Translation I decided to completely change my
              life around.
            </p>
            <br></br> In 2020 I started to dabble with HTML, CSS and JavaScript
            and I became addicted to know more and learn how things worked. In
            2021, I completed a Full Stack Web Development course and my goal is
            is to combine technology with beautiful designs and aesthetics.{" "}
          </div>
        </div>
      </article>

      <section className="my-projects" id="projects">
        <h2 className="myprojects-title">My Projects</h2>
        <div className="my-projects-wrapper">
          <div className="project-box">
            <img src={atlaslogo} alt="project-logo" className="project-logo" />
            <div className="project-text-container">
              <h3 className="project-title">Space Runner</h3>

              <p className="project-text">
                A running game where you dodge the debris in space by
                challenging the speed limits of your eyes.
              </p>
              <div className="button-wrapper">
              <a href="">Live Demo</a>
                
               <a href="">Source Code</a>
              </div>
             
            </div>
            <button onClick={openModal} className="modal-btn">Modal Btn</button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
          </div>

          <div className="project-box">
            <img
              src={hybridboxlogo}
              alt="project-logo"
              className="project-logo"
            />
            <div className="project-text-container">
              <h3 className="project-title">HybridBox</h3>

              <p className="project-text">
              An app where you can customise streaming services and handpick your favourite channels and streams.
              </p>
              
              <div className="button-wrapper">
              <a href="">Live Demo</a>
                
               <a href="">Source Code</a>
              </div>
            </div>
          </div>
          <div className="project-box">
            <img
              src={gamelistLogo}
              alt="project-logo"
              className="project-logo"
              id="gamelist"
            />
            <div className="project-text-container">
              <h3 className="project-title">TheGameList</h3>

              <p className="project-text">
              An app where you can list your game in a database.
              </p>
              <div className="button-wrapper">
              <a href="">Live Demo</a>
                
               <a href="">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <h2>Contact Me</h2>
        <div className="footer-container">
          
          
          <div className="footer-contacts">
            <span>Github</span>
            <span>Linkedin</span>
            <span>Email</span>
          </div>
            {/* <ContactForm /> */}
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
