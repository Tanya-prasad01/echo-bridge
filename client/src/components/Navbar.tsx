// import {  Link} from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//     return(
//         <nav>
            
//             <h2>EchoBridge</h2>

//             <div>
//               <Link to='/'>Home </Link>
//               <Link to='/#feature'>Features</Link>
//               <Link to='/about'>About</Link>
//               <Link to='/contact'>Contact</Link>
//             </div>

//             <Link to="/meeting" className="start-meeting-button">
//               Start Meeting
//             </Link>
            
//         </nav>
//     );
// }

// export default Navbar;




import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <Link to="/" className="logo">
        EchoBridge
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/#features">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Log in
        </Link>

        <Link to="/register" className="signup-button">
          Sign up
        </Link>

        <Link to="/meeting" className="start-meeting-button">
          Start Meeting
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;