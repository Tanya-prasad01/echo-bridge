 import "./About.css"

const About = () => {
  return (
    <main className="about"  id="about">

        <section className="about-intro">
          <h1>About EchoBridge</h1>
          <p>Connecting people beyond language.</p>
        </section>


        <section className="about-container">

            <div className="about-cards">
               <span>🌍</span>
               <h3>Break Barriers</h3>
               <p>Communicate across different languages.</p>
            </div>

            <div className="about-cards">
               <span>🎤</span>
               <h3>Speak Freely</h3>
               <p>Express yourself naturally and confidently.</p>
            </div>

            <div className="about-cards">
               <span>🤖</span>
               <h3>Understand instantly</h3>
               <p>Let AI help bridge the communication gap.</p>
            </div>

        </section>


        <section className="about-reason">
            <h3>Why EchoBridge</h3>
            <p>
                EchoBridge helps people communicate across different languages during online meetings, making conversations easier, faster and more inclusive.
            </p>
        </section>


        <section className="how-it-works">

            <h2>How It Works</h2>

            <div className="steps">
                <div>
                    <span>🎤</span>
                    <h3>Speak</h3>
                </div>

                <span>→</span>

                <div>
                    <span>🌍</span>
                    <h3>Translate</h3>
                </div>

                <span>→</span>
                
                <div>
                    <span>🤝</span>
                    <h3>Understand</h3>
                </div>
            </div>

        </section>

        
        <button className="about-button">
            Start Meeting
        </button>
          
    
    </main>
  );
};

export default About;