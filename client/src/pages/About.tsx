//  import "./About.css"

// const About = () => {
//   return (
//     <main className="about"  id="about">

//         <section className="about-intro">
//           <h1>About EchoBridge</h1>
//           <p>Connecting people beyond language.</p>
//         </section>


//         <section className="about-container">

//             <div className="about-cards">
//                <span>🌍</span>
//                <h3>Break Barriers</h3>
//                <p>Communicate across different languages.</p>
//             </div>

//             <div className="about-cards">
//                <span>🎤</span>
//                <h3>Speak Freely</h3>
//                <p>Express yourself naturally and confidently.</p>
//             </div>

//             <div className="about-cards">
//                <span>🤖</span>
//                <h3>Understand instantly</h3>
//                <p>Let AI help bridge the communication gap.</p>
//             </div>

//         </section>


//         <section className="about-reason">
//             <h3>Why EchoBridge</h3>
//             <p>
//                 EchoBridge helps people communicate across different languages during online meetings, making conversations easier, faster and more inclusive.
//             </p>
//         </section>


//         <section className="how-it-works">

//             <h2>How It Works</h2>

//             <div className="steps">
//                 <div>
//                     <span>🎤</span>
//                     <h3>Speak</h3>
//                 </div>

//                 <span>→</span>

//                 <div>
//                     <span>🌍</span>
//                     <h3>Translate</h3>
//                 </div>

//                 <span>→</span>
                
//                 <div>
//                     <span>🤝</span>
//                     <h3>Understand</h3>
//                 </div>
//             </div>

//         </section>

        
//         <button className="about-button">
//             Start Meeting
//         </button>
          
    
//     </main>
//   );
// };

// export default About;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const languages = [
  {
    language: "English",
    text: "Hello!",
    color: "purple",
  },
  {
    language: "Hindi",
    text: "नमस्ते!",
    color: "pink",
  },
  {
    language: "Spanish",
    text: "¡Hola!",
    color: "blue",
  },
  {
    language: "French",
    text: "Bonjour!",
    color: "violet",
  },
  {
    language: "German",
    text: "Hallo!",
    color: "indigo",
  },
];

const values = [
  {
    icon: "✦",
    title: "Innovation",
    description:
      "We use AI to make communication faster, smarter and more natural.",
  },
  {
    icon: "◎",
    title: "Accessibility",
    description:
      "Everyone should be able to communicate freely, regardless of language.",
  },
  {
    icon: "◇",
    title: "Human Connection",
    description:
      "Technology should bring people closer, not create another barrier.",
  },
  {
    icon: "◈",
    title: "Trust",
    description:
      "We believe meaningful communication should feel safe, reliable and respectful.",
  },
];

const journey = [
  {
    year: "2024",
    title: "The idea",
    text: "EchoBridge began with a simple question: what if language never had to stand between people?",
  },
  {
    year: "2025",
    title: "Building the vision",
    text: "We started exploring AI-powered speech recognition and real-time translation.",
  },
  {
    year: "2026",
    title: "EchoBridge",
    text: "A communication platform designed to make multilingual conversations feel effortless.",
  },
];

function About() {
  const [activeLanguage, setActiveLanguage] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(entry.target.dataset.section)
                ? prev
                : [...prev, entry.target.dataset.section]
            );
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.includes(id);

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-eyebrow">
            ✦ ABOUT ECHOBRIDGE
          </span>

          <h1>
            Connecting people
            <br />
            <span>beyond language.</span>
          </h1>

          <p>
            EchoBridge is an AI-powered communication platform designed
            to make conversations across languages feel natural,
            immediate and human.
          </p>

          <div className="about-hero-buttons">
            <Link to="/meeting" className="about-primary-btn">
              Start a Meeting
              <span>↗</span>
            </Link>

            <a href="#our-story" className="about-secondary-btn">
              Discover our story
              <span>↓</span>
            </a>
          </div>

        </div>

        {/* ANIMATED COMMUNICATION VISUAL */}
        <div className="communication-visual">

          <div className="visual-glow"></div>

          <div className="connection-ring ring-one"></div>
          <div className="connection-ring ring-two"></div>
          <div className="connection-ring ring-three"></div>

          <div className="center-orb">
            <span>✦</span>
          </div>

          {languages.map((item, index) => (
            <div
              key={item.language}
              className={`language-bubble bubble-${index} ${
                activeLanguage === index ? "active" : ""
              }`}
            >
              <strong>{item.text}</strong>
              <small>{item.language}</small>
            </div>
          ))}

        </div>

      </section>


      {/* STORY */}
      <section
        id="our-story"
        data-section="story"
        className={`about-story about-reveal ${
          isVisible("story") ? "show" : ""
        }`}
      >

        <div className="section-label">
          OUR STORY
        </div>

        <div className="story-grid">

          <div>
            <h2>
              Language should connect us,
              <span> not separate us.</span>
            </h2>
          </div>

          <div className="story-text">
            <p>
              Every day, people communicate across borders, cultures
              and languages. But even with modern technology,
              language can still make simple conversations difficult.
            </p>

            <p>
              EchoBridge was created to change that.
              We imagine a world where people can speak naturally,
              understand one another instantly and focus on the
              conversation instead of the translation.
            </p>

            <p>
              Our goal isn't simply to translate words.
              It's to preserve the meaning, emotion and flow
              behind every conversation.
            </p>
          </div>

        </div>

      </section>


      {/* MISSION + VISION */}
      <section
        data-section="mission"
        className={`mission-section about-reveal ${
          isVisible("mission") ? "show" : ""
        }`}
      >

        <div className="mission-card">
          <div className="mission-icon">✦</div>

          <div>
            <span>OUR MISSION</span>

            <h3>
              Make every conversation
              <br />
              easier to understand.
            </h3>

            <p>
              We use AI-powered tools to remove language barriers
              and create more inclusive communication.
            </p>
          </div>
        </div>

        <div className="mission-card vision-card">
          <div className="mission-icon">∞</div>

          <div>
            <span>OUR VISION</span>

            <h3>
              A world where language
              <br />
              never limits connection.
            </h3>

            <p>
              Wherever people come from, they should be able
              to communicate naturally and confidently.
            </p>
          </div>
        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        data-section="works"
        className={`works-section about-reveal ${
          isVisible("works") ? "show" : ""
        }`}
      >

        <div className="section-heading">
          <div className="section-label">
            HOW IT WORKS
          </div>

          <h2>
            From your voice
            <span> to understanding.</span>
          </h2>

          <p>
            EchoBridge combines speech recognition, translation
            and AI to make multilingual conversations feel seamless.
          </p>
        </div>


        <div className="process">

          <div className="process-item">
            <div className="process-number">01</div>

            <div className="process-icon">🎙</div>

            <h3>Speak</h3>

            <p>
              Say what you want naturally in your own language.
            </p>
          </div>


          <div className="process-line"></div>


          <div className="process-item">
            <div className="process-number">02</div>

            <div className="process-icon">✦</div>

            <h3>Understand</h3>

            <p>
              AI recognizes your speech and understands the context.
            </p>
          </div>


          <div className="process-line"></div>


          <div className="process-item">
            <div className="process-number">03</div>

            <div className="process-icon">◎</div>

            <h3>Translate</h3>

            <p>
              Your message is transformed into the listener's language.
            </p>
          </div>


          <div className="process-line"></div>


          <div className="process-item">
            <div className="process-number">04</div>

            <div className="process-icon">◉</div>

            <h3>Connect</h3>

            <p>
              Both people can focus on the conversation.
            </p>
          </div>

        </div>

      </section>


      {/* LANGUAGE EXPERIENCE */}
      <section
        data-section="languages"
        className={`language-section about-reveal ${
          isVisible("languages") ? "show" : ""
        }`}
      >

        <div className="language-heading">

          <div>
            <div className="section-label">
              BUILT FOR REAL CONVERSATIONS
            </div>

            <h2>
              One conversation.
              <br />
              <span>Many languages.</span>
            </h2>
          </div>

          <p>
            Communication shouldn't feel different just because
            the language changes.
          </p>

        </div>


        <div className="language-stage">

          <div className="speech-card speaker">
            <span>YOU</span>
            <strong>Hello, how are you?</strong>
            <small>English</small>
          </div>


          <div className="translation-core">

            <div className="core-circle">
              ✦
            </div>

            <div className="core-wave wave-one"></div>
            <div className="core-wave wave-two"></div>

            <span>AI TRANSLATION</span>

          </div>


          <div className="speech-card receiver">
            <span>THEY HEAR</span>

            <strong>
              {languages[activeLanguage].text}
            </strong>

            <small>
              {languages[activeLanguage].language}
            </small>
          </div>

        </div>


        <div className="language-selector">

          {languages.map((language, index) => (
            <button
              key={language.language}
              className={activeLanguage === index ? "selected" : ""}
              onClick={() => setActiveLanguage(index)}
            >
              {language.language}
            </button>
          ))}

        </div>

      </section>


      {/* VALUES */}
      <section
        data-section="values"
        className={`values-section about-reveal ${
          isVisible("values") ? "show" : ""
        }`}
      >

        <div className="section-heading">

          <div className="section-label">
            WHAT WE BELIEVE
          </div>

          <h2>
            Technology with
            <span> a human purpose.</span>
          </h2>

        </div>


        <div className="values-grid">

          {values.map((value) => (

            <div className="value-card" key={value.title}>

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

              <div className="value-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* JOURNEY */}
      <section
        data-section="journey"
        className={`journey-section about-reveal ${
          isVisible("journey") ? "show" : ""
        }`}
      >

        <div className="section-heading">

          <div className="section-label">
            OUR JOURNEY
          </div>

          <h2>
            From an idea
            <span> to a bridge.</span>
          </h2>

        </div>


        <div className="timeline">

          {journey.map((item, index) => (

            <div className="timeline-item" key={item.year}>

              <div className="timeline-dot">
                {index + 1}
              </div>

              <div className="timeline-content">

                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* STATS */}
      <section className="about-stats">

        <div>
          <strong>10K+</strong>
          <span>Happy Users</span>
        </div>

        <div>
          <strong>100+</strong>
          <span>Languages</span>
        </div>

        <div>
          <strong>1M+</strong>
          <span>Messages Translated</span>
        </div>

        <div>
          <strong>99%</strong>
          <span>Translation Accuracy</span>
        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div className="cta-glow"></div>

        <div className="section-label">
          READY TO CONNECT?
        </div>

        <h2>
          Let your words
          <br />
          <span>cross every border.</span>
        </h2>

        <p>
          Start a conversation without worrying about
          language barriers.
        </p>

        <Link to="/meeting" className="cta-button">
          Start a Meeting
          <span>↗</span>
        </Link>

      </section>

    </main>
  );
}

export default About;