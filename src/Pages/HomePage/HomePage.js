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
        <h2>Fullstack Web Developer</h2>
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
            <img src={javascriptLogo} alt="javascript" className="language-logo" />
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
          <div className="project-box">1</div>
          <div className="project-box">2</div>
          <div className="project-box">3</div>
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
