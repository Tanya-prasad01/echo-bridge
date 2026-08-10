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

/* =========================
   SPEECH RECOGNITION TYPES
========================= */

interface SpeechResultEvent {
  resultIndex: number;
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
      isFinal: boolean;
    };
    length: number;
  };
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;

  start: () => void;
  stop: () => void;

  onresult:
    | ((event: SpeechResultEvent) => void)
    | null;

  onend: (() => void) | null;

  onerror:
    | ((event: unknown) => void)
    | null;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionInstance;
}

interface SpeechRecognitionWindow extends Window {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
}

/* =========================
   COMPONENT
========================= */

const MeetingRoom = () => {
  const navigate = useNavigate();

  /* =========================
     VIDEO REFS
  ========================= */

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const cameraStreamRef = useRef<MediaStream | null>(null);

  const screenStreamRef = useRef<MediaStream | null>(null);

  /* =========================
     SPEECH RECOGNITION REF
  ========================= */

  const recognitionRef =
    useRef<SpeechRecognitionInstance | null>(null);

  /* =========================
     STATES
  ========================= */

  const [cameraOn, setCameraOn] = useState(true);

  const [micOn, setMicOn] = useState(true);

  const [permissionError, setPermissionError] =
    useState(false);

  const [isScreenSharing, setIsScreenSharing] =
    useState(false);

  const [showParticipants, setShowParticipants] =
    useState(false);

  const [captionsOn, setCaptionsOn] =
    useState(false);

  const [captionText, setCaptionText] =
    useState("");

  /* =========================
     MEETING ID
  ========================= */

  const meetingId = "784 512 963";

  /* =========================
     START CAMERA + MIC
  ========================= */

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
      console.log("Permission error:", error);

      setCameraOn(false);
      setMicOn(false);
      setPermissionError(true);
    }
  };

  /* =========================
     INITIAL CAMERA
  ========================= */

  useEffect(() => {
    let mounted = true;

    const initializeMedia = async () => {
      try {
        const stream =
          await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });

        if (!mounted) {
          stream
            .getTracks()
            .forEach((track) => track.stop());

          return;
        }

        cameraStreamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        setCameraOn(true);
        setMicOn(true);
        setPermissionError(false);
      } catch (error) {
        console.log("Permission error:", error);

        if (mounted) {
          setCameraOn(false);
          setMicOn(false);
          setPermissionError(true);
        }
      }
    };

    initializeMedia();

    return () => {
      mounted = false;

      if (cameraStreamRef.current) {
        cameraStreamRef.current
          .getTracks()
          .forEach((track) => track.stop());
      }

      if (screenStreamRef.current) {
        screenStreamRef.current
          .getTracks()
          .forEach((track) => track.stop());
      }

      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  /* =========================
     CAMERA
  ========================= */

  const toggleCamera = () => {
    const stream = cameraStreamRef.current;

    if (!stream) return;

    const videoTrack =
      stream.getVideoTracks()[0];

    if (!videoTrack) return;

    videoTrack.enabled = !videoTrack.enabled;

    setCameraOn(videoTrack.enabled);
  };

  /* =========================
     MICROPHONE
  ========================= */

  const toggleMic = () => {
    const stream = cameraStreamRef.current;

    if (!stream) return;

    const audioTrack =
      stream.getAudioTracks()[0];

    if (!audioTrack) return;

    audioTrack.enabled = !audioTrack.enabled;

    setMicOn(audioTrack.enabled);
  };

  /* =========================
     COPY MEETING ID
  ========================= */

  const copyMeetingId = async () => {
    try {
      await navigator.clipboard.writeText(meetingId);

      alert("Meeting ID copied!");
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  /* =========================
     SCREEN SHARE
  ========================= */

  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      stopScreenSharing();
      return;
    }

    try {
      const screenStream =
        await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: false,
        });

      screenStreamRef.current = screenStream;

      if (videoRef.current) {
        videoRef.current.srcObject =
          screenStream;
      }

      setIsScreenSharing(true);

      const screenTrack =
        screenStream.getVideoTracks()[0];

      if (screenTrack) {
        screenTrack.onended = () => {
          stopScreenSharing();
        };
      }
    } catch (error) {
      console.log(
        "Screen sharing cancelled:",
        error
      );
    }
  };

  /* =========================
     STOP SCREEN SHARE
  ========================= */

  const stopScreenSharing = () => {
    if (screenStreamRef.current) {
      screenStreamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      screenStreamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject =
        cameraStreamRef.current;
    }

    setIsScreenSharing(false);
  };

  /* =========================
     PARTICIPANTS
  ========================= */

  const toggleParticipants = () => {
    setShowParticipants(
      (previousValue) => !previousValue
    );
  };

  /* =========================
     CAPTIONS
  ========================= */

  const startCaptions = () => {
    const speechWindow =
      window as SpeechRecognitionWindow;

    const SpeechRecognition =
      speechWindow.SpeechRecognition ||
      speechWindow.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition is not supported in this browser."
      );

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-US";

    recognition.onresult = (
      event: SpeechResultEvent
    ) => {
      let text = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        text +=
          event.results[i][0].transcript;
      }

      setCaptionText(text);
    };

    recognition.onend = () => {
      if (captionsOn) {
        try {
          recognition.start();
        } catch (error) {
          console.log(
            "Caption restart error:",
            error
          );
        }
      }
    };

    recognition.onerror = (error) => {
      console.log(
        "Speech recognition error:",
        error
      );
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();

      setCaptionsOn(true);
    } catch (error) {
      console.log(
        "Caption start error:",
        error
      );
    }
  };

  /* =========================
     STOP CAPTIONS
  ========================= */

  const stopCaptions = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();

      recognitionRef.current = null;
    }

    setCaptionsOn(false);

    setCaptionText("");
  };

  /* =========================
     TOGGLE CAPTIONS
  ========================= */

  const toggleCaptions = () => {
    if (captionsOn) {
      stopCaptions();
    } else {
      startCaptions();
    }
  };

  /* =========================
     RETRY PERMISSION
  ========================= */

  const retryPermission = () => {
    startMedia();
  };

  /* =========================
     LEAVE MEETING
  ========================= */

  const leaveMeeting = () => {
    if (cameraStreamRef.current) {
      cameraStreamRef.current
        .getTracks()
        .forEach((track) => track.stop());
    }

    if (screenStreamRef.current) {
      screenStreamRef.current
        .getTracks()
        .forEach((track) => track.stop());
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    navigate("/");
  };

  /* =========================
     UI
  ========================= */

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

          <h3>
            Permission required
          </h3>

          <p>
            Camera and microphone access is
            blocked. Please allow access from
            your browser settings.
          </p>

          <button
            className="retry-btn"
            onClick={retryPermission}
          >
            Try Again
          </button>

        </div>
      )}


      {/* ================= MAIN CONTENT ================= */}

      <section className="meeting-content">

        {/* ================= VIDEO ================= */}

        <div className="video-card">

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={
              cameraOn || isScreenSharing
                ? "live-video"
                : "live-video video-hidden"
            }
          />

          {!cameraOn &&
            !isScreenSharing && (
              <div className="camera-off">

                <div className="user-icon">
                  👤
                </div>

                <p>
                  Camera is off
                </p>

              </div>
            )}

          <span className="participant-name">
            You
          </span>

        </div>


        {/* ================= WAITING CARD ================= */}

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

            <h2>
              Participants
            </h2>

            <div className="participant-item">

              <div className="participant-avatar">
                👤
              </div>

              <div className="participant-info">

                <strong>
                  You
                </strong>

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

      </section>


      {/* ================= LIVE CAPTIONS ================= */}

      {captionsOn && (
        <div className="captions-box">

          <div className="captions-title">
            💬 Live Captions
          </div>

          <div className="caption-text">
            {captionText ||
              "Listening..."}
          </div>

        </div>
      )}


      {/* ================= CONTROLS ================= */}

      <footer className="meeting-controls">

        {/* CAMERA */}

        <button
          className="control-btn"
          onClick={toggleCamera}
        >

          <span className="control-icon">
            {cameraOn
              ? "📹"
              : "🚫"}
          </span>

          <span>
            {cameraOn
              ? "Camera"
              : "Camera Off"}
          </span>

        </button>


        {/* MIC */}

        <button
          className="control-btn"
          onClick={toggleMic}
        >

          <span className="control-icon">
            {micOn
              ? "🎤"
              : "🔇"}
          </span>

          <span>
            {micOn
              ? "Mic"
              : "Mic Off"}
          </span>

        </button>


        {/* CAPTIONS */}

        <button
          className={
            captionsOn
              ? "control-btn active"
              : "control-btn"
          }
          onClick={toggleCaptions}
        >

          <span className="control-icon">
            💬
          </span>

          <span>
            {captionsOn
              ? "Captions On"
              : "Captions"}
          </span>

        </button>


        {/* TRANSLATE */}

        <button className="control-btn">

          <span className="control-icon">
            🌍
          </span>

          <span>
            Translate
          </span>

        </button>


        {/* SHARE SCREEN */}

        <button
          className={
            isScreenSharing
              ? "control-btn sharing"
              : "control-btn"
          }
          onClick={toggleScreenShare}
        >

          <span className="control-icon">
            🖥️
          </span>

          <span>
            {isScreenSharing
              ? "Stop Sharing"
              : "Share Screen"}
          </span>

        </button>


        {/* PARTICIPANTS */}

        <button
          className="control-btn"
          onClick={toggleParticipants}
        >

          <span className="control-icon">
            👥
          </span>

          <span>
            Participants
          </span>

        </button>


        {/* MORE */}

        <button className="control-btn">

          <span className="control-icon">
            •••
          </span>

          <span>
            More
          </span>

        </button>


        {/* END CALL */}

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