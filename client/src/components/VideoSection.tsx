// import { useRef } from "react";
import type { RefObject } from "react";
import "./VideoSection.css";

interface VideoSectionProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  cameraOn: boolean;
  isScreenSharing: boolean;
}

const VideoSection = ({
  videoRef,
  cameraOn,
  isScreenSharing,
}: VideoSectionProps) => {
  return (
    <section className="video-section">

      <div className="video-card">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`live-video ${
            !cameraOn && !isScreenSharing
              ? "video-hidden"
              : ""
          }`}
        />

        {!cameraOn && !isScreenSharing && (
          <div className="camera-off">
            <div className="user-icon">
              👤
            </div>

            <p>Camera is off</p>
          </div>
        )}

        <span className="participant-name">
          You
        </span>
      </div>

      <div className="waiting-card">
        <div className="waiting-icon">
          👥
        </div>

        <h3>
          Waiting for participants
        </h3>

        <p>
          Share the Meeting ID with others
          to invite them.
        </p>
      </div>

    </section>
  );
};

export default VideoSection;