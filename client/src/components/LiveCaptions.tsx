import "./LiveCaptions.css";

interface LiveCaptionsProps {
  captionsOn: boolean;
  captionText: string;
}

const LiveCaptions = ({
  captionsOn,
  captionText,
}: LiveCaptionsProps) => {
  if (!captionsOn) return null;

  return (
    <div className="caption-box">
      <div className="captions-title">
        💬 Live Captions
      </div>

      <div className="caption-text">
        {captionText || "Listening..."}
      </div>
    </div>
  );
};

export default LiveCaptions;