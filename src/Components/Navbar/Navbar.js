import "./Navbar.css";


function Navbar() {
  return (
    <div className="container">
      {/* this should be a header */}
      <header className="header">
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        
        <div className="logo">
          <h1>Fábio Guerreiro</h1>
        </div>

        <nav className="nav-container">
          <a href="#about">About me</a>
          <a href="#about">Projects</a>
          <a href="#about">Contacts</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
