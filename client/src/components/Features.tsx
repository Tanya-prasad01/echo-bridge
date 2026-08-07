import "./Features.css"

const Features = () => {
  return (
    <section className="features">
        <h2>FEATURES</h2>
        <div className="features-container">
          <div className="feature-card">
            <span>🌍</span>
            <h3>Real-Time Translation</h3>
            <p>Translate conversations instantly during meetings.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="feature-card">
            <span>🎤</span>
            <h3>Speech Recognition</h3>
            <p>Convert voice into text with AI.</p>
            <a href="/">Learn More →</a>
          </div>
          <div className="feature-card">
            <span>🤖</span>
            <h3>AI Meeting Summary</h3>
            <p>Generate meeting summary using AI automatically.</p>
            <a href="/">Learn More →</a>
          </div>
        </div>
    </section>
  );  
};

export default Features;