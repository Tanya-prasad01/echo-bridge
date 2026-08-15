// import { Link } from "react-router-dom";
// import "./Hero.css"
// function Hero() {
//   return (
//     <section className="hero">

//         <h1>EchoBridge</h1>
//         <h2>Talk Without Language Barriers</h2>

//         <div className="hero-highlight">

//           <div>
//             <span>🌍</span>
//             <h4>Meet</h4>
//           </div>

//           <div>
//           <span>🎤</span>
//           <h4>Talk</h4>
//           </div>

//           <div>
//           <span>🤝</span>
//           <h4>Understand</h4>
//           </div>

//         </div>

//         <p>AI-Powered Multilingual Meeting Platform</p> 

//         <div className="hero-buttons">

//           <Link to="/meeting" className="hero-meeting-button">
//             Start Meeting
//           </Link>

//           <button>Join Meeting</button>

//         </div>
        
//     </section>
//   )
// }

// export default Hero;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const [showJoin, setShowJoin] = useState(false);
  const [meetingId, setMeetingId] = useState("");

  // Generate a new 9-digit Meeting ID
  const generateMeetingId = () => {
    const number = Math.floor(
      100000000 + Math.random() * 900000000
    );

    return number.toString();
  };

  // START MEETING
  const handleStartMeeting = () => {
    const newMeetingId = generateMeetingId();

    navigate(`/meeting/${newMeetingId}`);
  };

  // JOIN MEETING
  const handleJoinMeeting = () => {
    const cleanId = meetingId.replace(/\s/g, "");

    if (cleanId.length !== 9) {
      alert("Please enter a valid 9-digit Meeting ID");
      return;
    }

    navigate(`/meeting/${cleanId}`);
  };

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

      <p>
        AI-Powered Multilingual Meeting Platform
      </p>

      <div className="hero-buttons">

        {/* START MEETING */}

        <button
          className="hero-meeting-button"
          onClick={handleStartMeeting}
        >
          Start Meeting
        </button>

        {/* JOIN MEETING */}

        <button
          onClick={() => setShowJoin(true)}
        >
          Join Meeting
        </button>

      </div>

      {/* JOIN MEETING BOX */}

      {showJoin && (
        <div className="join-meeting-box">

          <h3>Join Meeting</h3>

          <p>
            Enter the Meeting ID shared with you.
          </p>

          <input
            type="text"
            placeholder="784 512 963"
            value={meetingId}
            onChange={(e) =>
              setMeetingId(e.target.value)
            }
          />

          <div className="join-actions">

            <button
              className="join-confirm"
              onClick={handleJoinMeeting}
            >
              Join
            </button>

            <button
              className="join-cancel"
              onClick={() => {
                setShowJoin(false);
                setMeetingId("");
              }}
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Hero;