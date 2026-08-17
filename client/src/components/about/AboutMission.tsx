import "./AboutMission.css";

const AboutMission = () => {
  return (
    <section className="about-mission">

      <div className="mission-visual">

        <div className="mission-card mission-card-back">
          <span>こんにちは</span>
          <small>Japanese</small>
        </div>

        <div className="mission-card mission-card-main">
          <div className="mission-icon">🌐</div>

          <span className="mission-language">
            English
          </span>

          <strong>
            Hello, how are you?
          </strong>
        </div>

        <div className="mission-card mission-card-front">
          <span>Hola</span>
          <small>Spanish</small>
        </div>

        <div className="mission-connection">
          <span>✦</span>
        </div>

      </div>

      <div className="mission-content">

        <span className="section-tag">
          OUR MISSION
        </span>

        <h2>
          Communication should
          <span> never have borders.</span>
        </h2>

        <p>
          Imagine joining a meeting where everyone speaks
          their own language, yet everyone understands each
          other naturally.
        </p>

        <p>
          That is the idea behind <strong>EchoBridge</strong>.
          We are building a smarter way for people from
          different languages and cultures to communicate,
          collaborate and connect.
        </p>

        <div className="mission-points">

          <div className="mission-point">
            <div>01</div>
            <span>
              Speak naturally in your own language.
            </span>
          </div>

          <div className="mission-point">
            <div>02</div>
            <span>
              Let AI translate the conversation in real time.
            </span>
          </div>

          <div className="mission-point">
            <div>03</div>
            <span>
              Understand each other without language barriers.
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutMission;