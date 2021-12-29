import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  //state for the navbar

  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="left-side">FabioGuerreiro</div>
      <div className="right-side">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} className="dropdown">
          <div className="menu">
            <div className="menu-hamburguer"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
