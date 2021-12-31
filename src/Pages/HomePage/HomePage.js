import "./HomePage.css";
import myPic from "../.././images/fab.jpg";

function HomePage() {
  return (
    <div className="container">
      <section className="intro">
        <img src={myPic} alt="my-intro-pic" className="my-pic"></img>
        <h1>My name is Fábio Guerreiro</h1>
        <h2>Fullstack Web Developer</h2>
      </section>
      <section className="my-tech">
        <h2>My Tech </h2>
        <div className="tech-container">
          <div className="tech-box">A</div>
          <div className="tech-box">B</div>
          <div className="tech-box">C</div>
          <div className="tech-box">D</div>
          <div className="tech-box">E</div>
        </div>
      </section>

      <article className="about-me">
        <h2>About me</h2>
        <div className="about-me-wrapper">
          <img src="" alt="about-me-pic" className="about-me-pic" />

          <div className="about-me-text">
           <p> I first started to deal with the world of tech in 2014 when I did a
            multimedia course in Lisbon. Although I did not pursue a career in
            the big world of tech at the time I was always keeping an eye on it
            and after completing a bachelor's and a master's degree in
            Translation I decided to completely change my life around.
            </p>
            <br></br> In 2020 I started to dabble with HTML, CSS and JavaScript
            and I became addicted to know more and learn how things worked. In
            2021, I completed a Full Stack Web Development course and my goal is
            is to combine technology with beautiful designs and aesthetics.{" "}
          </div>
        </div>
      </article>
    </div>
  );
}

export default HomePage;
