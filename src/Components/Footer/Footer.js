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
            <span><img src={githubLogo} alt="github-logo" id="github-logo"/></span>
            <span><img src={linkedinLogo} alt="github-logo" id="github-logo"/></span>
            <span><img src={gmailLogo} alt="github-logo" id="github-logo"/></span>
          </div>
          
        </div>
        </footer>
     );
}

export default Footer;