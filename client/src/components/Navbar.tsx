import "./Navbar.css";

function Navbar() {
    return(
        <nav>
            <h2>EchoBridge</h2>

            <div>
            <a href='/'> Home </a>
            <a href='/'> Features</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            </div>
            <button>Start Meeting</button>
        </nav>
    );
}

export default Navbar;