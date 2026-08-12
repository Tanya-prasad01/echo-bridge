// import "./MeetingRoom.css";

// const MeetingRoom = () => {
//   return (
//     <main className="meeting-room">

//       {/* Header */}
//       <header className="meeting-header">
//         <h2>EchoBridge</h2>

//         <div className="meeting-info">
//           <span>Meeting ID: 784 512 963</span>
//           <button className="leave-btn">Leave Meeting</button>
//         </div>
//       </header>


//       {/* Main Meeting Area */}
//       <div className="meeting-container">

//         {/* Meeting Details */}
//         <section className="meeting-details">
//           <h3>Meeting Details</h3>

//           <p>Meeting ID</p>
//           <h2>784 512 963</h2>

//           <p>Host</p>
//           <h3>Tanya</h3>

//           <p>Language</p>
//           <h3>English</h3>

//           <p>Participants</p>
//           <h3>3</h3>
//         </section>


//         {/* Camera Preview */}
//         <section className="camera-preview">
//           <h3>Preview</h3>

//           <div className="camera-box">
//             <span>👩</span>
//             <p>Camera Preview</p>
//           </div>

//           <div className="meeting-buttons">
//             <button>Join Meeting</button>
//             <button>Test Audio & Video</button>
//           </div>
//         </section>


//         {/* Settings */}
//         <section className="meeting-settings">
//           <h3>Settings</h3>

//           <label>Your Language</label>
//           <select>
//             <option>English</option>
//             <option>Hindi</option>
//             <option>Spanish</option>
//             <option>French</option>
//           </select>

//           <label>Translate To</label>
//           <select>
//             <option>Spanish</option>
//             <option>English</option>
//             <option>Hindi</option>
//             <option>French</option>
//           </select>

//           <label>Microphone</label>
//           <select>
//             <option>Default Microphone</option>
//           </select>

//           <label>Speaker</label>
//           <select>
//             <option>Default Speaker</option>
//           </select>
//         </section>

//       </div>

//     </main>
//   );
// };

// export default MeetingRoom;







// import { useEffect, useRef, useState } from "react";
// import "./MeetingRoom.css";

// const MeetingRoom = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [cameraOn, setCameraOn] = useState(true);

//   useEffect(() => {
//     let stream: MediaStream;

//     const startCamera = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Camera/Microphone permission denied:", error);
//       }
//     };

//     startCamera();

//     return () => {
//       stream?.getTracks().forEach((track) => track.stop());
//     };
//   }, []);

//   const toggleCamera = () => {
//     if (!videoRef.current?.srcObject) return;

//     const stream = videoRef.current.srcObject as MediaStream;

//     stream.getVideoTracks().forEach((track) => {
//       track.enabled = !track.enabled;
//       setCameraOn(track.enabled);
//     });
//   };

//   return (
//     <main className="meeting-room">

//       {/* Header */}
//       <header className="meeting-header">
//         <h2>EchoBridge</h2>

//         <div className="meeting-info">
//           <span>Meeting ID: 784 512 963</span>
//           <button className="leave-btn">Leave Meeting</button>
//         </div>
//       </header>

//       {/* Video Area */}
//       <section className="video-area">

//         {/* Your Video */}
//         <div className="video-card">
//           <video
//             ref={videoRef}
//             autoPlay
//             playsInline
//             muted
//             className={cameraOn ? "live-video" : "camera-off"}
//           />

//           {!cameraOn && <p>Camera Off</p>}

//           <span className="participant-name">You</span>
//         </div>

//         {/* Other Participant */}
//         <div className="video-card">
//           <div className="video-placeholder">
//             👨🏻
//           </div>

//           <span className="participant-name">Carlos</span>
//         </div>

//       </section>

//       {/* Controls */}
//       <section className="meeting-controls">

//         <button onClick={toggleCamera}>
//           {cameraOn ? "📹" : "🚫"}
//           <span>Camera</span>
//         </button>

//         <button>
//           🎤
//           <span>Mic</span>
//         </button>

//         <button>
//           💬
//           <span>Captions</span>
//         </button>

//         <button>
//           🌍
//           <span>Translate</span>
//         </button>

//         <button>
//           🖥️
//           <span>Share Screen</span>
//         </button>

//         <button>
//           👥
//           <span>Participants</span>
//         </button>

//         <button>
//           •••
//           <span>More</span>
//         </button>

//         <button className="end-call">
//           📞
//         </button>

//       </section>

//     </main>
//   );
// };

// export default MeetingRoom;





// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MeetingRoom.css";

// const MeetingRoom = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [cameraOn, setCameraOn] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     let stream: MediaStream;

//     const startCamera = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Camera/Microphone permission denied:", error);
//       }
//     };

//     startCamera();

//     return () => {
//       stream?.getTracks().forEach((track) => track.stop());
//     };
//   }, []);

//   const toggleCamera = () => {
//     if (!videoRef.current?.srcObject) return;

//     const stream = videoRef.current.srcObject as MediaStream;

//     stream.getVideoTracks().forEach((track) => {
//       track.enabled = !track.enabled;
//       setCameraOn(track.enabled);
//     });
//   };

//   const handleLeaveMeeting = () => {
//     navigate("/");
//   };

//   return (
//     <div className="meeting-room">

//       {/* Meeting Header */}
//       <header className="meeting-header">

//         <h2>EchoBridge</h2>

//         <div className="meeting-info">
//           <span>Meeting ID: 784 512 963</span>

//           <button
//             className="leave-btn"
//             onClick={handleLeaveMeeting}
//           >
//             Leave Meeting
//           </button>
//         </div>

//       </header>


//       {/* Video Area */}
//       <main className="video-area">

//         {/* Your Video */}
//         <div className="video-card">

//           <video
//             ref={videoRef}
//             autoPlay
//             playsInline
//             muted
//             className={cameraOn ? "live-video" : "camera-off"}
//           />

//           {!cameraOn && (
//             <div className="camera-off-message">
//               📷
//               <p>Camera Off</p>
//             </div>
//           )}

//           <span className="participant-name">
//             You
//           </span>

//         </div>


//         {/* Other Participant */}
//         <div className="video-card">

//           <div className="video-placeholder">
//             👨🏻
//           </div>

//           <span className="participant-name">
//             Carlos
//           </span>

//         </div>

//       </main>


//       {/* Controls */}
//       <section className="meeting-controls">

//         <button onClick={toggleCamera}>
//           <span className="control-icon">
//             {cameraOn ? "📹" : "🚫"}
//           </span>
//           <span>Camera</span>
//         </button>


//         <button>
//           <span className="control-icon">🎤</span>
//           <span>Mic</span>
//         </button>


//         <button>
//           <span className="control-icon">💬</span>
//           <span>Captions</span>
//         </button>


//         <button>
//           <span className="control-icon">🌍</span>
//           <span>Translate</span>
//         </button>


//         <button>
//           <span className="control-icon">🖥️</span>
//           <span>Share Screen</span>
//         </button>


//         <button>
//           <span className="control-icon">👥</span>
//           <span>Participants</span>
//         </button>


//         <button>
//           <span className="control-icon">•••</span>
//           <span>More</span>
//         </button>


//         <button
//           className="end-call"
//           onClick={handleLeaveMeeting}
//         >
//           📞
//         </button>

//       </section>

//     </div>
//   );
// };

// export default MeetingRoom;



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MeetingRoom.css";

// const MeetingRoom = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [cameraOn, setCameraOn] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     let stream: MediaStream;

//     const startCamera = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Camera/Microphone permission denied:", error);
//         setCameraOn(false);
//       }
//     };

//     startCamera();

//     return () => {
//       stream?.getTracks().forEach((track) => track.stop());
//     };
//   }, []);

//   const toggleCamera = () => {
//     if (!videoRef.current?.srcObject) return;

//     const stream = videoRef.current.srcObject as MediaStream;

//     stream.getVideoTracks().forEach((track) => {
//       track.enabled = !track.enabled;
//       setCameraOn(track.enabled);
//     });
//   };

//   const leaveMeeting = () => {
//     navigate("/");
//   };

//   return (
//     <div className="meeting-room">

//       {/* Meeting Header */}
//       <header className="meeting-header">
//         <h2>EchoBridge</h2>

//         <div className="meeting-info">
//           <span>Meeting ID: 784 512 963</span>

//           <button
//             className="leave-btn"
//             onClick={leaveMeeting}
//           >
//             Leave Meeting
//           </button>
//         </div>
//       </header>

//       {/* Video Area */}
//       <main className="video-area">

//         {/* Your Video */}
//         <div className="video-card main-video">

//           {cameraOn ? (
//             <video
//               ref={videoRef}
//               autoPlay
//               playsInline
//               muted
//               className="live-video"
//             />
//           ) : (
//             <div className="camera-off">
//               <span>📷</span>
//               <p>Camera Off</p>
//             </div>
//           )}

//           <span className="participant-name">
//             You
//           </span>

//         </div>

//         {/* Other Participant */}
//         <div className="video-card small-video">

//           <div className="video-placeholder">
//             👨🏻
//           </div>

//           <span className="participant-name">
//             Carlos
//           </span>

//         </div>

//       </main>

//       {/* Meeting Controls */}
//       <section className="meeting-controls">

//         <button onClick={toggleCamera}>
//           <span>{cameraOn ? "📹" : "🚫"}</span>
//           <small>Camera</small>
//         </button>

//         <button>
//           <span>🎤</span>
//           <small>Mic</small>
//         </button>

//         <button>
//           <span>💬</span>
//           <small>Captions</small>
//         </button>

//         <button>
//           <span>🌍</span>
//           <small>Translate</small>
//         </button>

//         <button>
//           <span>🖥️</span>
//           <small>Share Screen</small>
//         </button>

//         <button>
//           <span>👥</span>
//           <small>Participants</small>
//         </button>

//         <button>
//           <span>•••</span>
//           <small>More</small>
//         </button>

//         <button
//           className="end-call"
//           onClick={leaveMeeting}
//         >
//           📞
//         </button>

//       </section>

//     </div>
//   );
// };

// export default MeetingRoom;



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MeetingRoom.css";

// const MeetingRoom = () => {
//   const navigate = useNavigate();

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const screenVideoRef = useRef<HTMLVideoElement | null>(null);

//   const [cameraOn, setCameraOn] = useState(true);
//   const [micOn, setMicOn] = useState(true);
//   const [cameraError, setCameraError] = useState(false);
//   const [micError, setMicError] = useState(false);
//   const [screenSharing, setScreenSharing] = useState(false);

//   const [meetingId] = useState("784 512 963");

//   useEffect(() => {
//     let stream: MediaStream | null = null;

//     const startCameraAndMic = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }

//         setCameraOn(true);
//         setMicOn(true);
//       } catch (error) {
//         console.error("Camera/Microphone error:", error);

//         // Try camera separately
//         try {
//           stream = await navigator.mediaDevices.getUserMedia({
//             video: true,
//           });

//           if (videoRef.current) {
//             videoRef.current.srcObject = stream;
//           }

//           setCameraOn(true);
//           setMicOn(false);
//           setMicError(true);
//         } catch {
//           setCameraOn(false);
//           setMicOn(false);
//           setCameraError(true);
//           setMicError(true);
//         }
//       }
//     };

//     startCameraAndMic();

//     return () => {
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   // CAMERA
//   const toggleCamera = () => {
//     const stream = videoRef.current?.srcObject as MediaStream | null;

//     if (!stream) return;

//     const videoTracks = stream.getVideoTracks();

//     videoTracks.forEach((track) => {
//       track.enabled = !track.enabled;
//       setCameraOn(track.enabled);
//     });
//   };

//   // MICROPHONE
//   const toggleMic = () => {
//     const stream = videoRef.current?.srcObject as MediaStream | null;

//     if (!stream) return;

//     const audioTracks = stream.getAudioTracks();

//     if (audioTracks.length === 0) {
//       setMicError(true);
//       return;
//     }

//     audioTracks.forEach((track) => {
//       track.enabled = !track.enabled;
//       setMicOn(track.enabled);
//     });
//   };

//   // SCREEN SHARE
//   const toggleScreenShare = async () => {
//     if (screenSharing) {
//       if (screenVideoRef.current) {
//         screenVideoRef.current.srcObject = null;
//       }

//       setScreenSharing(false);
//       return;
//     }

//     try {
//       const screenStream =
//         await navigator.mediaDevices.getDisplayMedia({
//           video: true,
//         });

//       if (screenVideoRef.current) {
//         screenVideoRef.current.srcObject = screenStream;
//       }

//       setScreenSharing(true);

//       screenStream.getVideoTracks()[0].onended = () => {
//         setScreenSharing(false);

//         if (screenVideoRef.current) {
//           screenVideoRef.current.srcObject = null;
//         }
//       };
//     } catch (error) {
//       console.log("Screen sharing cancelled");
//     }
//   };

//   // LEAVE MEETING
//   const leaveMeeting = () => {
//     const stream = videoRef.current?.srcObject as MediaStream | null;

//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//     }

//     navigate("/");
//   };

//   // COPY MEETING ID
//   const copyMeetingId = async () => {
//     try {
//       await navigator.clipboard.writeText(meetingId);
//       alert("Meeting ID copied!");
//     } catch {
//       alert("Unable to copy Meeting ID");
//     }
//   };

//   return (
//     <div className="meeting-room">

//       {/* TOP BAR - NOT MAIN NAVBAR */}
//       <header className="meeting-topbar">

//         <div className="meeting-logo">
//           EchoBridge
//         </div>

//         <div className="meeting-id-area">
//           <span>
//             Meeting ID: <strong>{meetingId}</strong>
//           </span>

//           <button
//             className="copy-btn"
//             onClick={copyMeetingId}
//           >
//             Copy
//           </button>

//           <button
//             className="leave-btn"
//             onClick={leaveMeeting}
//           >
//             Leave Meeting
//           </button>
//         </div>

//       </header>


//       {/* PERMISSION WARNING */}

//       {(cameraError || micError) && (
//         <div className="permission-warning">

//           <strong>Permission required</strong>

//           <p>
//             {cameraError && micError
//               ? "Camera and microphone access is blocked. Please allow access from your browser settings."
//               : cameraError
//               ? "Camera access is blocked. Please allow camera access."
//               : "Microphone access is blocked. Please allow microphone access."}
//           </p>

//           <button
//             onClick={() => window.location.reload()}
//           >
//             Try Again
//           </button>

//         </div>
//       )}


//       {/* VIDEO AREA */}

//       <main className="video-area">

//         {/* YOUR VIDEO */}

//         <div className="main-video">

//           {cameraOn ? (
//             <video
//               ref={videoRef}
//               autoPlay
//               playsInline
//               muted
//             />
//           ) : (
//             <div className="camera-off-screen">
//               <div className="camera-icon">
//                 👤
//               </div>

//               <p>Camera is off</p>
//             </div>
//           )}

//           <div className="name-label">
//             You
//           </div>

//         </div>


//         {/* SCREEN SHARE */}

//         {screenSharing && (
//           <div className="screen-share">

//             <video
//               ref={screenVideoRef}
//               autoPlay
//               playsInline
//             />

//             <span>
//               You are sharing your screen
//             </span>

//           </div>
//         )}


//         {/* NO PARTICIPANTS */}

//         <div className="waiting-message">

//           <div className="waiting-icon">
//             👥
//           </div>

//           <h3>
//             Waiting for participants
//           </h3>

//           <p>
//             Share the Meeting ID with others to invite them.
//           </p>

//           <button
//             className="invite-btn"
//             onClick={copyMeetingId}
//           >
//             Copy Meeting ID
//           </button>

//         </div>

//       </main>


//       {/* CONTROLS */}

//       <footer className="meeting-controls">

//         {/* CAMERA */}

//         <button
//           className={`control-btn ${
//             !cameraOn ? "off" : ""
//           }`}
//           onClick={toggleCamera}
//         >
//           <span className="control-icon">
//             {cameraOn ? "📹" : "🚫"}
//           </span>

//           <span>
//             {cameraOn ? "Camera" : "Camera Off"}
//           </span>
//         </button>


//         {/* MIC */}

//         <button
//           className={`control-btn ${
//             !micOn ? "off" : ""
//           }`}
//           onClick={toggleMic}
//         >
//           <span className="control-icon">
//             {micOn ? "🎤" : "🔇"}
//           </span>

//           <span>
//             {micOn ? "Mic" : "Mic Off"}
//           </span>
//         </button>


//         {/* CAPTIONS */}

//         <button
//           className="control-btn"
//           onClick={() =>
//             alert("Live captions will be connected here.")
//           }
//         >
//           <span className="control-icon">
//             💬
//           </span>

//           <span>
//             Captions
//           </span>
//         </button>


//         {/* TRANSLATE */}

//         <button
//           className="control-btn"
//           onClick={() =>
//             alert("Live translation will be connected here.")
//           }
//         >
//           <span className="control-icon">
//             🌍
//           </span>

//           <span>
//             Translate
//           </span>
//         </button>


//         {/* SCREEN SHARE */}

//         <button
//           className={`control-btn ${
//             screenSharing ? "active" : ""
//           }`}
//           onClick={toggleScreenShare}
//         >
//           <span className="control-icon">
//             🖥️
//           </span>

//           <span>
//             {screenSharing
//               ? "Stop Sharing"
//               : "Share Screen"}
//           </span>
//         </button>


//         {/* PARTICIPANTS */}

//         <button
//           className="control-btn"
//           onClick={() =>
//             alert("No other participants have joined yet.")
//           }
//         >
//           <span className="control-icon">
//             👥
//           </span>

//           <span>
//             Participants
//           </span>
//         </button>


//         {/* MORE */}

//         <button
//           className="control-btn"
//           onClick={() =>
//             alert("More meeting options coming soon.")
//           }
//         >
//           <span className="control-icon">
//             •••
//           </span>

//           <span>
//             More
//           </span>
//         </button>


//         {/* END CALL */}

//         <button
//           className="end-call-btn"
//           onClick={leaveMeeting}
//         >
//           📞
//         </button>

//       </footer>

//     </div>
//   );
// };

// export default MeetingRoom;


import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MeetingRoom.css";
import { translateText } from "../services/aiTranslator";

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

const MeetingRoom = () => {
  const navigate = useNavigate();

  // =========================
  // VIDEO REFS
  // =========================

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cameraStreamRef = useRef<MediaStream | null>(null);
  const screenStreamRef = useRef<MediaStream | null>(null);

  // =========================
  // SPEECH RECOGNITION
  // =========================

  const recognitionRef =
    useRef<SpeechRecognitionInstance | null>(null);

  // =========================
  // STATES
  // =========================

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [permissionError, setPermissionError] = useState(false);

  const [isScreenSharing, setIsScreenSharing] =
    useState(false);

  const [showParticipants, setShowParticipants] =
    useState(false);

  const [captionsOn, setCaptionsOn] =
    useState(false);

  const [captionText, setCaptionText] =
    useState("");

  // =========================
  // TRANSLATION STATES
  // =========================

  const [showTranslation, setShowTranslation] =
    useState(false);

  const [textToTranslate, setTextToTranslate] =
    useState("");

  const [translatedText, setTranslatedText] =
    useState("");

  const [targetLanguage, setTargetLanguage] =
    useState("Spanish");

  const [translating, setTranslating] =
    useState(false);

  // =========================
  // MEETING ID
  // =========================

  const meetingId = "784 512 963";

  // =========================
  // START CAMERA + MIC
  // =========================

  const startMedia = async () => {
    try {
      if (cameraStreamRef.current) {
        cameraStreamRef.current
          .getTracks()
          .forEach((track) => track.stop());
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

      cameraStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);
      setMicOn(true);
      setPermissionError(false);
    } catch (error) {
      console.error("Permission error:", error);

      setCameraOn(false);
      setMicOn(false);
      setPermissionError(true);
    }
  };

  // =========================
  // INITIAL MEDIA
  // =========================

  useEffect(() => {
    startMedia();

    return () => {
      cameraStreamRef.current
        ?.getTracks()
        .forEach((track) => track.stop());

      screenStreamRef.current
        ?.getTracks()
        .forEach((track) => track.stop());

      recognitionRef.current?.stop();
    };
  }, []);

  // =========================
  // CAMERA
  // =========================

  const toggleCamera = () => {
    const stream = cameraStreamRef.current;

    if (!stream) return;

    const videoTrack = stream.getVideoTracks()[0];

    if (!videoTrack) return;

    videoTrack.enabled = !videoTrack.enabled;

    setCameraOn(videoTrack.enabled);
  };

  // =========================
  // MICROPHONE
  // =========================

  const toggleMic = () => {
    const stream = cameraStreamRef.current;

    if (!stream) return;

    const audioTrack = stream.getAudioTracks()[0];

    if (!audioTrack) return;

    audioTrack.enabled = !audioTrack.enabled;

    setMicOn(audioTrack.enabled);
  };

  // =========================
  // COPY MEETING ID
  // =========================

  const copyMeetingId = async () => {
    try {
      await navigator.clipboard.writeText(meetingId);
      alert("Meeting ID copied!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // =========================
  // LEAVE MEETING
  // =========================

  const leaveMeeting = () => {
    cameraStreamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());

    screenStreamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());

    recognitionRef.current?.stop();

    navigate("/");
  };

  // =========================
  // TRY AGAIN
  // =========================

  const retryPermission = () => {
    startMedia();
  };

  // =========================
  // SCREEN SHARE
  // =========================

  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      screenStreamRef.current
        ?.getTracks()
        .forEach((track) => track.stop());

      screenStreamRef.current = null;

      setIsScreenSharing(false);

      if (videoRef.current) {
        videoRef.current.srcObject =
          cameraStreamRef.current;
      }

      return;
    }

    try {
      const screenStream =
        await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
        });

      screenStreamRef.current = screenStream;

      if (videoRef.current) {
        videoRef.current.srcObject = screenStream;
      }

      setIsScreenSharing(true);

      const screenTrack =
        screenStream.getVideoTracks()[0];

      screenTrack.onended = () => {
        screenStreamRef.current = null;
        setIsScreenSharing(false);

        if (videoRef.current) {
          videoRef.current.srcObject =
            cameraStreamRef.current;
        }
      };
    } catch (error) {
      console.error("Screen sharing cancelled:", error);
    }
  };

  // =========================
  // CAPTIONS
  // =========================

  const toggleCaptions = () => {
    if (captionsOn) {
      recognitionRef.current?.stop();

      setCaptionsOn(false);
      setCaptionText("");

      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition is not supported in this browser."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let text = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        text += event.results[i][0].transcript;
      }

      setCaptionText(text);
    };

    recognition.onerror = (event: any) => {
      console.error(
        "Speech recognition error:",
        event
      );
    };

    recognition.onend = () => {
      if (captionsOn) {
        try {
          recognition.start();
        } catch {
          // Ignore restart errors
        }
      }
    };

    recognitionRef.current = recognition;

    recognition.start();

    setCaptionsOn(true);
  };

  // =========================
  // TRANSLATE
  // =========================

  const handleTranslate = async () => {
    if (!textToTranslate.trim()) {
      alert("Please enter some text to translate.");
      return;
    }

    try {
      setTranslating(true);
      setTranslatedText("");

      const result = await translateText(
        textToTranslate,
        targetLanguage
      );

      setTranslatedText(result);
    } catch (error) {
      console.error("Translation error:", error);

      setTranslatedText(
        "Translation failed. Please check your Gemini API key."
      );
    } finally {
      setTranslating(false);
    }
  };

  // =========================
  // RETURN
  // =========================

  return (
    <main className="meeting-room">

      {/* ================= HEADER ================= */}

      <header className="meeting-header">

        <div className="meeting-logo">
          EchoBridge
        </div>

        <div className="meeting-info">

          <span className="meeting-id">
            Meeting ID:{" "}
            <strong>{meetingId}</strong>
          </span>

          <button
            className="copy-btn"
            onClick={copyMeetingId}
          >
            Copy
          </button>

          <button
            className="leave-btn"
            onClick={leaveMeeting}
          >
            Leave Meeting
          </button>

        </div>

      </header>


      {/* ================= PERMISSION ERROR ================= */}

      {permissionError && (
        <div className="permission-box">

          <h3>Permission required</h3>

          <p>
            Camera and microphone access is blocked.
            Please allow access from your browser
            settings.
          </p>

          <button
            onClick={retryPermission}
            className="retry-btn"
          >
            Try Again
          </button>

        </div>
      )}


      {/* ================= MAIN VIDEO AREA ================= */}

      <section className="meeting-content">

        {/* YOUR VIDEO */}

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


        {/* WAITING CARD */}

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

          <button
            className="copy-meeting-btn"
            onClick={copyMeetingId}
          >
            Copy Meeting ID
          </button>

        </div>

      </section>


      {/* ================= CAPTIONS ================= */}

      {captionsOn && (
        <div className="caption-box">
          {captionText || "Listening..."}
        </div>
      )}


      {/* ================= PARTICIPANTS ================= */}

      {showParticipants && (
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
      )}


      {/* ================= TRANSLATION PANEL ================= */}

      {showTranslation && (
        <div className="translation-panel">

          <div className="translation-header">

            <h3>AI Translation</h3>

            <button
              onClick={() =>
                setShowTranslation(false)
              }
            >
              ×
            </button>

          </div>

          <textarea
            placeholder="Enter text to translate..."
            value={textToTranslate}
            onChange={(e) =>
              setTextToTranslate(e.target.value)
            }
          />

          <select
            value={targetLanguage}
            onChange={(e) =>
              setTargetLanguage(e.target.value)
            }
          >
            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="Spanish">
              Spanish
            </option>

            <option value="French">
              French
            </option>

            <option value="German">
              German
            </option>

            <option value="Korean">
              Korean
            </option>

            <option value="Japanese">
              Japanese
            </option>

            <option value="Chinese">
              Chinese
            </option>
          </select>

          <button
            className="translate-action-btn"
            onClick={handleTranslate}
            disabled={translating}
          >
            {translating
              ? "Translating..."
              : "Translate"}
          </button>

          {translatedText && (
            <div className="translation-result">

              <strong>
                Translation:
              </strong>

              <p>{translatedText}</p>

            </div>
          )}

        </div>
      )}


      {/* ================= CONTROLS ================= */}

      <footer className="meeting-controls">

        {/* CAMERA */}

        <button
          className={`control-btn ${
            !cameraOn ? "off" : ""
          }`}
          onClick={toggleCamera}
        >

          <span className="control-icon">
            {cameraOn ? "📹" : "🚫"}
          </span>

          <span>
            {cameraOn
              ? "Camera"
              : "Camera Off"}
          </span>

        </button>


        {/* MIC */}

        <button
          className={`control-btn ${
            !micOn ? "off" : ""
          }`}
          onClick={toggleMic}
        >

          <span className="control-icon">
            {micOn ? "🎤" : "🔇"}
          </span>

          <span>
            {micOn ? "Mic" : "Mic Off"}
          </span>

        </button>


        {/* CAPTIONS */}

        <button
          className={`control-btn ${
            captionsOn ? "active" : ""
          }`}
          onClick={toggleCaptions}
        >

          <span className="control-icon">
            💬
          </span>

          <span>Captions</span>

        </button>


        {/* TRANSLATE */}

        <button
          className={`control-btn ${
            showTranslation ? "active" : ""
          }`}
          onClick={() =>
            setShowTranslation(!showTranslation)
          }
        >

          <span className="control-icon">
            🌍
          </span>

          <span>Translate</span>

        </button>


        {/* SCREEN SHARE */}

        <button
          className={`control-btn ${
            isScreenSharing ? "active" : ""
          }`}
          onClick={toggleScreenShare}
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


        {/* PARTICIPANTS */}

        <button
          className={`control-btn ${
            showParticipants ? "active" : ""
          }`}
          onClick={() =>
            setShowParticipants(
              !showParticipants
            )
          }
        >

          <span className="control-icon">
            👥
          </span>

          <span>Participants</span>

        </button>


        {/* MORE */}

        <button className="control-btn">

          <span className="control-icon">
            •••
          </span>

          <span>More</span>

        </button>


        {/* DISCONNECT */}

        <button
          className="end-call"
          onClick={leaveMeeting}
          title="Leave meeting"
        >
          📞
        </button>

      </footer>

    </main>
  );
};

export default MeetingRoom;