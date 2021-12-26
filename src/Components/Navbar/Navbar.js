import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div>
        <Link to="/">About me</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contacts</Link>
        </div>
     );
}

export default Navbar;