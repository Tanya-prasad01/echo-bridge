import "./MeetingControls.css";

interface MeetingControlsProps {
  cameraOn: boolean;
  micOn: boolean;
  captionsOn: boolean;
  showTranslation: boolean;
  isScreenSharing: boolean;
  showParticipants: boolean;

  onCameraToggle: () => void;
  onMicToggle: () => void;
  onCaptionsToggle: () => void;
  onTranslationToggle: () => void;
  onScreenShareToggle: () => void;
  onParticipantsToggle: () => void;
  onLeave: () => void;
}

const MeetingControls = ({
  cameraOn,
  micOn,
  captionsOn,
  showTranslation,
  isScreenSharing,
  showParticipants,
  onCameraToggle,
  onMicToggle,
  onCaptionsToggle,
  onTranslationToggle,
  onScreenShareToggle,
  onParticipantsToggle,
  onLeave,
}: MeetingControlsProps) => {
  return (
    <footer className="meeting-controls">

      <button
        className={`control-btn ${
          !cameraOn ? "off" : ""
        }`}
        onClick={onCameraToggle}
      >
        <span className="control-icon">
          {cameraOn ? "📹" : "🚫"}
        </span>
        <span>
          {cameraOn ? "Camera" : "Camera Off"}
        </span>
      </button>

      <button
        className={`control-btn ${
          !micOn ? "off" : ""
        }`}
        onClick={onMicToggle}
      >
        <span className="control-icon">
          {micOn ? "🎤" : "🔇"}
        </span>
        <span>
          {micOn ? "Mic" : "Mic Off"}
        </span>
      </button>

      <button
        className={`control-btn ${
          captionsOn ? "active" : ""
        }`}
        onClick={onCaptionsToggle}
      >
        <span className="control-icon">
          💬
        </span>
        <span>Captions</span>
      </button>

      <button
        className={`control-btn ${
          showTranslation ? "active" : ""
        }`}
        onClick={onTranslationToggle}
      >
        <span className="control-icon">
          🌍
        </span>
        <span>Translate</span>
      </button>

      <button
        className={`control-btn ${
          isScreenSharing ? "active" : ""
        }`}
        onClick={onScreenShareToggle}
      >
        <span className="control-icon">
          🖥️
        </span>
        <span>
          {isScreenSharing
            ? "Stop Share"
            : "Share Screen"}
        </span>
      </button>

      <button
        className={`control-btn ${
          showParticipants ? "active" : ""
        }`}
        onClick={onParticipantsToggle}
      >
        <span className="control-icon">
          👥
        </span>
        <span>Participants</span>
      </button>

      <button className="control-btn">
        <span className="control-icon">
          •••
        </span>
        <span>More</span>
      </button>

      <button
        className="end-call"
        onClick={onLeave}
      >
        📞
      </button>

    </footer>
  );
};

export default MeetingControls;