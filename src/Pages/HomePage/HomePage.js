import "./HomePage.css";
import "../../Components/Navbar/Navbar.css";
import React from "react";
import myPic from "../../images/fab.jpg";
/* import bgImage from "../../images/Meteor.svg"; */
import htmlLogo from "../../images/htmllogo.svg";
import cssLogo from "../../images/css3.svg";
import javascriptLogo from "../../images/javascriptlogo.svg";
import nodeLogo from "../../images/nodejs.svg";
import reactLogo from "../../images/reactlogo1.svg";
import mongoLogo from "../../images/mongodb.svg";
import spacerunnerImage from "../../images/spacerunnersite.png";
import thegamelistImage from "../../images/thegamelistsite.png";
import hybridboxImage from "../../images/hybridboxsite.png"
import handlebarsLogo from "../../images/handlebars.svg";

import Footer from "../../Components/Footer/Footer";

function HomePage() {
 

  

  return (
    <div className="container">
      <div className="intro-wrapper">
        <section className="intro">
        

          <img src={myPic} alt="my-intro-pic" className="my-pic"></img>
          <div className="intro-text">
            <h1>I am Fábio Guerreiro</h1>
            <h2>
              Jr. Fullstack Web Developer
              <small className="alpha-code">PT</small>
            </h2>
        </div>
        
          {/* <img src={bgImage} alt="bg-header" className="bg-image" /> */}
        </section>
      </div>
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
            <img
              src={handlebarsLogo}
              alt="handlebars"
              className="language-logo" id="handlebars-logo"
            />
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
              I am a Web Developer based in Lisbon, Portugal. I first started to deal with the world of
              tech in 2014 when I did a multimedia course in Lisbon. Although I
              did not pursue a career in the big world of tech at the time I was
              always keeping an eye on it and after completing a bachelor's and
              a master's degree in Translation I decided to completely change my
              life around.
            </p>
            <br></br> In 2020 I started to play with HTML, CSS and JavaScript
            and I became addicted on how things worked and on how I could learn more. After that, in
            2021, I completed a Full Stack Web Development course focused on the MERN stack and my goal for the future is to combine technology with beautiful designs and aesthetics.
            <br></br>
            <br></br>
            <p><b>My Hobbies</b></p>
            <p> Drawing Manga art, playing online games and binge-watch anime and series whenever I can.</p>
            <br></br>
           
            <p><b>What's next for me</b></p>
            I plan on learning and studying more about Algorithms and Data Structure. Learn SASS, TypeScript and C#. 
          </div>
        </div>
      </article>
      
      <section className="my-projects" id="projects">
        <h2 className="myprojects-title">My Projects</h2>
       
        <div className="my-projects-wrapper">
          <div className="project-box">
            <img src={spacerunnerImage} alt="project-logo" className="project-image" />
            <div className="project-text-container">
              <h3 className="project-title">Space Runner</h3>

              <p className="project-text">
                This is a game built with Canvas, CSS and JavaScript. The main focus was the usage of JavaScript classes and methods with basic OOP knowledge.
              </p>
              <div className="button-wrapper">
                <a href="https://spacerunner-thegame.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

                <a href="https://github.com/Fabio-FG/SpaceRunner-game" target="_blank" rel="noreferrer">Source Code</a>
              </div>
            </div>
           
          
          </div>
<hr className="hr-project"></hr>
          <div className="project-box">
            <img
              src={hybridboxImage}
              alt="project-logo"
              className="project-image"
            />
            <div className="project-text-container">
              <h3 className="project-title">HybridBox</h3>

              <p className="project-text">
                This is a full stack app where you can customise streaming services and handpick
                your favourite channels and streams. It was built with React, MongoDB, NodeJS and Express. 
              </p>

              <div className="button-wrapper">
                <a href="https://hybridbox.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>

                <a href="https://github.com/Fabio-FG/HybridBox-client" target="_blank" rel="noreferrer">Source Code</a>
              </div>
            </div>
          </div>
          <hr className="hr-project"></hr>
          <div className="project-box">
            <img
              src={thegamelistImage}
              alt="project-logo"
              className="project-image"
              id="gamelist"
            />
            <div className="project-text-container">
              <h3 className="project-title">TheGameList</h3>

              <p className="project-text">
                An app where you can list your game in a database built with MongoDB, NodeJS, Express and Handlebars. The focus was in implementing CRUD. 
              </p>
              <div className="button-wrapper">
                <a href="https://gamelistproject.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo</a>

                <a href="https://github.com/YFarias/Ironhacker---Project-2" target="_blank" rel="noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

     
        <Footer />
     
    </div>
  );
}

export default HomePage;
