import {  Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <nav>
            
            <h2>EchoBridge</h2>

            <div>
              <Link to='/'>Home </Link>
              <Link to='/#feature'>Features</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
            </div>

            <Link to="/meeting" className="start-meeting-button">
              Start Meeting
            </Link>
            
        </nav>
    );
}

export default Navbar;