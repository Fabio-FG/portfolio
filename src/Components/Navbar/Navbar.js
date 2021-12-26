import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return ( 
        <nav>
        FabioGuerreiro
        <Link to="/">About me</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contacts</Link>
        </nav>
     );
}

export default Navbar;