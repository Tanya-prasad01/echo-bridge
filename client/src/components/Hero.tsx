import { Link } from "react-router-dom";
import "./Hero.css"
function Hero() {
  return (
    <section className="hero">

        <h1>EchoBridge</h1>
        <h2>Talk Without Language Barriers</h2>

        <div className="hero-highlight">

          <div>
            <span>🌍</span>
            <h4>Meet</h4>
          </div>

          <div>
          <span>🎤</span>
          <h4>Talk</h4>
          </div>

          <div>
          <span>🤝</span>
          <h4>Understand</h4>
          </div>

        </div>

        <p>AI-Powered Multilingual Meeting Platform</p> 

        <div className="hero-buttons">

          <Link to="/meeting" className="hero-meeting-button">
            Start Meeting
          </Link>

          <button>Join Meeting</button>

        </div>
        
    </section>
  )
}

export default Hero;