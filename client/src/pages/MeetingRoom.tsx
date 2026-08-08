import "./MeetingRoom.css";

const MeetingRoom = () => {
  return (
    <main className="meeting-room">

      {/* Header */}
      <header className="meeting-header">
        <h2>EchoBridge</h2>

        <div className="meeting-info">
          <span>Meeting ID: 784 512 963</span>
          <button className="leave-btn">Leave Meeting</button>
        </div>
      </header>


      {/* Main Meeting Area */}
      <div className="meeting-container">

        {/* Meeting Details */}
        <section className="meeting-details">
          <h3>Meeting Details</h3>

          <p>Meeting ID</p>
          <h2>784 512 963</h2>

          <p>Host</p>
          <h3>Tanya</h3>

          <p>Language</p>
          <h3>English</h3>

          <p>Participants</p>
          <h3>3</h3>
        </section>


        {/* Camera Preview */}
        <section className="camera-preview">
          <h3>Preview</h3>

          <div className="camera-box">
            <span>👩</span>
            <p>Camera Preview</p>
          </div>

          <div className="meeting-buttons">
            <button>Join Meeting</button>
            <button>Test Audio & Video</button>
          </div>
        </section>


        {/* Settings */}
        <section className="meeting-settings">
          <h3>Settings</h3>

          <label>Your Language</label>
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <label>Translate To</label>
          <select>
            <option>Spanish</option>
            <option>English</option>
            <option>Hindi</option>
            <option>French</option>
          </select>

          <label>Microphone</label>
          <select>
            <option>Default Microphone</option>
          </select>

          <label>Speaker</label>
          <select>
            <option>Default Speaker</option>
          </select>
        </section>

      </div>

    </main>
  );
};

export default MeetingRoom;