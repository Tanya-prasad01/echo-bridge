import "./ParticipantsPanel.css";

interface ParticipantsPanelProps {
  showParticipants: boolean;
  setShowParticipants: (value: boolean) => void;
  cameraOn: boolean;
  micOn: boolean;
}

const ParticipantsPanel = ({
  showParticipants,
  setShowParticipants,
  cameraOn,
  micOn,
}: ParticipantsPanelProps) => {
  if (!showParticipants) return null;

  return (
    <div className="participants-panel">

      <button
        className="close-participants"
        onClick={() =>
          setShowParticipants(false)
        }
      >
        ×
      </button>

      <h3>Participants</h3>

      <div className="participant-item">

        <div className="participant-avatar">
          👤
        </div>

        <div className="participant-info">
          <strong>You</strong>

          <span>
            {cameraOn
              ? "Camera on"
              : "Camera off"}{" "}
            •{" "}
            {micOn
              ? "Mic on"
              : "Mic off"}
          </span>
        </div>

      </div>

      <div className="no-participants">
        No other participants yet
      </div>

    </div>
  );
};

export default ParticipantsPanel;