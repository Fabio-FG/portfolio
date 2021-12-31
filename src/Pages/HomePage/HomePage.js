import "./HomePage.css";
import myPic from "../../images/fab.jpg";
import htmlLogo from "../../images/htmllogo.svg";
import cssLogo from "../../images/css3.svg";
import javascriptLogo from "../../images/javascriptlogo.svg";
import nodeLogo from "../../images/nodejs.svg";
import reactLogo from "../../images/reactlogo1.svg";
import mongoLogo from "../../images/mongodb.svg";

function HomePage() {
  return (
    <div className="container">
      <section className="intro">
        <img src={myPic} alt="my-intro-pic" className="my-pic"></img>
        <h1>My name is Fábio Guerreiro</h1>
        <h2>
          Jr. Fullstack Web Developer<small className="alpha-code">PT</small>
        </h2>
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
            <img src={reactLogo} alt="javascript" className="language-logo" />
          </div>

          <div className="tech-box">
            <img src={nodeLogo} alt="javascript" className="language-logo" />
          </div>

          <div className="tech-box">
            <img src={mongoLogo} alt="javascript" className="language-logo" />
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
              I first started to deal with the world of tech in 2014 when I did
              a multimedia course in Lisbon. Although I did not pursue a career
              in the big world of tech at the time I was always keeping an eye
              on it and after completing a bachelor's and a master's degree in
              Translation I decided to completely change my life around.
            </p>
            <br></br> In 2020 I started to dabble with HTML, CSS and JavaScript
            and I became addicted to know more and learn how things worked. In
            2021, I completed a Full Stack Web Development course and my goal is
            is to combine technology with beautiful designs and aesthetics.{" "}
          </div>
        </div>
      </article>

      <section className="my-projects">
        <h2>My Projects</h2>
        <div className="my-projects-wrapper">
          <div className="project-box">
            
             <img src="" alt="project-logo" className="project-logo"/>
            <div className="project-text-container">
             <h2 className="project-title">Space Runner</h2>
             
              <p className="project-text">
                A running game where you dodge the debris in space by
                challenging the speed limits of your eyes.
              </p>
              <div className="button-wrapper">
                <a
                  href="https://spacerunner-thegame.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Fabio-FG/SpaceRunner-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
              <div className="tech-used">
                <h3>Technology used:</h3>
                <ul className="tech-list">
                  <li>Html Canvas</li>
                  <li>CSS</li>
                  <li>Vanilla JS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-box"><img src="" alt="project-logo" className="project-logo"/>
            <div className="project-text-container">
             <h2 className="project-title">HybridBox</h2>
             
              <p className="project-text">
                A running game where you dodge the debris in space by
                challenging the speed limits of your eyes.
              </p>
              <div className="button-wrapper">
                <a
                  href="https://spacerunner-thegame.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Fabio-FG/SpaceRunner-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
              <div className="tech-used">
                <h3 >Technology used:</h3>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>CSS</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div></div>
          <div className="project-box"><img src="" alt="project-logo" className="project-logo"/>
            <div className="project-text-container">
             <h2 className="project-title">TheGameList</h2>
             
              <p className="project-text">
                A running game where you dodge the debris in space by
                challenging the speed limits of your eyes.
              </p>
              <div className="button-wrapper">
                <a
                  href="https://spacerunner-thegame.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Fabio-FG/SpaceRunner-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
              <div className="tech-used">
                <h3>Technology used:</h3>
                <ul className="tech-list">
                  <li>Html</li>
                  <li>CSS</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Handlebars</li>
                  <li>MongoDB</li>
                  <li>Axios</li>
                </ul>
              </div>
            </div></div>
        </div>
      </section>

      <footer>
        <h2>Contact Me</h2>
        <div className="footer-contacts">
          <span>Github</span>
          <span>Linkedin</span>
          <span>Email</span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
