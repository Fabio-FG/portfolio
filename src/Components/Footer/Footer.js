import githubLogo from "../../images/github.svg";
import linkedinLogo from "../../images/linkedin.svg";
import gmailLogo from "../../images/gmail.svg";
import './Footer.css';



function Footer() {
    return ( 
        <footer>
            <h2>Contact Me</h2>
        <div className="footer-container">
          <div className="footer-contacts">
            <a href="https://github.com/Fabio-FG" target="_blank" rel="noreferrer"><span><img src={githubLogo} alt="github-logo" id="github-logo"/></span></a>
            <a href="https://www.linkedin.com/in/fabiofguerreiro/" target="_blank" rel="noreferrer"><span><img src={linkedinLogo} alt="github-logo" id="github-logo"/></span></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" target="_blank" rel="noreferrer"><span><img src={gmailLogo} alt="github-logo" id="github-logo"/></span></a>
          </div>
          
        </div>
        </footer>
     );
}

export default Footer;