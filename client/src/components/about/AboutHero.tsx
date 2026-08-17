import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">

      <div className="about-hero-content">

        <span className="about-hero-tag">
          ABOUT ECHOBRIDGE
        </span>

        <h1>
          Breaking Language
          <span> Barriers.</span>
          <br />
          Connecting People.
        </h1>

        <p>
          EchoBridge is an AI-powered multilingual meeting
          platform designed to make communication effortless,
          no matter what language you speak.
        </p>

      </div>

      <div className="about-hero-orbit">

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        <div className="orbit-globe">
          🌍
        </div>

        <div className="orbit-dot dot-one"></div>
        <div className="orbit-dot dot-two"></div>
        <div className="orbit-dot dot-three"></div>

      </div>

    </section>
  );
};

export default AboutHero;