import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="container">
      {/* this should be a header */}
      <header className="header">
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label for="nav-toggle" className="nav-toggle-label">
        {/* Hamburguer using span */}
          <span></span>
        </label>
        
        <div className="logo">
        <h1><Link to="/" className="my-name">Fábio Guerreiro</Link></h1>
        </div>

        <nav className="nav-container">
          <a href="#about-me">About me</a>
          <a href="#projects">Projects</a>
          <Link to="/contact-me">Contacts</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
