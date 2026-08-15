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





// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MeetingRoom.css";
// import { translateText } from "../services/aiTranslator";

// /* =====================================================
//    SPEECH RECOGNITION TYPES
// ===================================================== */

// interface SpeechRecognitionAlternative {
//   transcript: string;
// }

// interface SpeechRecognitionResult {
//   [index: number]: SpeechRecognitionAlternative;
//   isFinal: boolean;
//   length: number;
// }

// interface SpeechRecognitionResultList {
//   [index: number]: SpeechRecognitionResult;
//   length: number;
// }

// interface SpeechRecognitionEvent {
//   resultIndex: number;
//   results: SpeechRecognitionResultList;
// }

// interface SpeechRecognitionErrorEvent {
//   error: string;
//   message?: string;
// }

// interface SpeechRecognitionInstance {
//   continuous: boolean;
//   interimResults: boolean;
//   lang: string;

//   start: () => void;
//   stop: () => void;
//   abort: () => void;

//   onresult:
//     | ((event: SpeechRecognitionEvent) => void)
//     | null;

//   onerror:
//     | ((event: SpeechRecognitionErrorEvent) => void)
//     | null;

//   onend: (() => void) | null;
// }

// interface SpeechRecognitionConstructor {
//   new (): SpeechRecognitionInstance;
// }

// declare global {
//   interface Window {
//     SpeechRecognition?: SpeechRecognitionConstructor;
//     webkitSpeechRecognition?: SpeechRecognitionConstructor;
//   }
// }

// /* =====================================================
//    COMPONENT
// ===================================================== */

// const MeetingRoom = () => {
//   const navigate = useNavigate();

//   /* =====================================================
//      VIDEO REFS
//   ===================================================== */

//   const videoRef =
//     useRef<HTMLVideoElement | null>(null);

//   const cameraStreamRef =
//     useRef<MediaStream | null>(null);

//   const screenStreamRef =
//     useRef<MediaStream | null>(null);

//   /* =====================================================
//      SPEECH RECOGNITION REFS
//   ===================================================== */

//   const recognitionRef =
//     useRef<SpeechRecognitionInstance | null>(null);

//   const listeningRef =
//     useRef(false);

//   const restartTimeoutRef =
//     useRef<number | null>(null);

//   const captionsOnRef =
//     useRef(false);

//   const showTranslationRef =
//     useRef(false);

//   const inputLanguageRef =
//     useRef("English");

//   const targetLanguageRef =
//     useRef("Spanish");

//   /* =====================================================
//      MEDIA STATES
//   ===================================================== */

//   const [cameraOn, setCameraOn] =
//     useState(true);

//   const [micOn, setMicOn] =
//     useState(true);

//   const [permissionError, setPermissionError] =
//     useState(false);

//   const [isScreenSharing, setIsScreenSharing] =
//     useState(false);

//   /* =====================================================
//      PARTICIPANTS
//   ===================================================== */

//   const [showParticipants, setShowParticipants] =
//     useState(false);

//   /* =====================================================
//      CAPTIONS
//   ===================================================== */

//   const [captionsOn, setCaptionsOn] =
//     useState(false);

//   const [captionText, setCaptionText] =
//     useState("");

//   /* =====================================================
//      TRANSLATION
//   ===================================================== */

//   const [showTranslation, setShowTranslation] =
//     useState(false);

//   const [textToTranslate, setTextToTranslate] =
//     useState("");

//   const [translatedText, setTranslatedText] =
//     useState("");

//   const [targetLanguage, setTargetLanguage] =
//     useState("Spanish");

//   const [translating, setTranslating] =
//     useState(false);

//   /* =====================================================
//      INPUT LANGUAGE
//   ===================================================== */

//   const [inputLanguage, setInputLanguage] =
//     useState("English");

//   /* =====================================================
//      MEETING ID
//   ===================================================== */

//   const meetingId = "784 512 963";

//   /* =====================================================
//      LANGUAGE CODES
//   ===================================================== */

//   const languageCodes: {
//     [key: string]: string;
//   } = {
//     English: "en-US",
//     Hindi: "hi-IN",
//     Spanish: "es-ES",
//     French: "fr-FR",
//     German: "de-DE",
//     Korean: "ko-KR",
//     Japanese: "ja-JP",
//     Chinese: "zh-CN",
//     Italian: "it-IT",
//     Portuguese: "pt-BR",
//   };

//   /* =====================================================
//      KEEP REFS UPDATED
//   ===================================================== */

//   useEffect(() => {
//     captionsOnRef.current = captionsOn;
//   }, [captionsOn]);

//   useEffect(() => {
//     showTranslationRef.current =
//       showTranslation;
//   }, [showTranslation]);

//   useEffect(() => {
//     inputLanguageRef.current =
//       inputLanguage;
//   }, [inputLanguage]);

//   useEffect(() => {
//     targetLanguageRef.current =
//       targetLanguage;
//   }, [targetLanguage]);

//   /* =====================================================
//      START CAMERA + MIC
//   ===================================================== */

//   const startMedia = async () => {
//     try {
//       if (cameraStreamRef.current) {
//         cameraStreamRef.current
//           .getTracks()
//           .forEach((track) => track.stop());
//       }

//       const stream =
//         await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });

//       cameraStreamRef.current = stream;

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       setCameraOn(true);
//       setMicOn(true);
//       setPermissionError(false);
//     } catch (error) {
//       console.error(
//         "Camera/Microphone permission error:",
//         error
//       );

//       setCameraOn(false);
//       setMicOn(false);
//       setPermissionError(true);
//     }
//   };

//   /* =====================================================
//      INITIAL MEDIA
//   ===================================================== */

//   useEffect(() => {
//     startMedia();

//     return () => {
//       cameraStreamRef.current
//         ?.getTracks()
//         .forEach((track) => track.stop());

//       screenStreamRef.current
//         ?.getTracks()
//         .forEach((track) => track.stop());

//       if (restartTimeoutRef.current) {
//         window.clearTimeout(
//           restartTimeoutRef.current
//         );
//       }

//       recognitionRef.current?.stop();

//       recognitionRef.current = null;
//       listeningRef.current = false;
//       captionsOnRef.current = false;
//     };
//   }, []);

//   /* =====================================================
//      CAMERA
//   ===================================================== */

//   const toggleCamera = () => {
//     const stream =
//       cameraStreamRef.current;

//     if (!stream) return;

//     const videoTrack =
//       stream.getVideoTracks()[0];

//     if (!videoTrack) return;

//     videoTrack.enabled =
//       !videoTrack.enabled;

//     setCameraOn(videoTrack.enabled);
//   };

//   /* =====================================================
//      MICROPHONE
//   ===================================================== */

//   const toggleMic = () => {
//     const stream =
//       cameraStreamRef.current;

//     if (!stream) return;

//     const audioTrack =
//       stream.getAudioTracks()[0];

//     if (!audioTrack) return;

//     audioTrack.enabled =
//       !audioTrack.enabled;

//     setMicOn(audioTrack.enabled);
//   };

//   /* =====================================================
//      COPY MEETING ID
//   ===================================================== */

//   const copyMeetingId = async () => {
//     try {
//       await navigator.clipboard.writeText(
//         meetingId
//       );

//       alert("Meeting ID copied!");
//     } catch (error) {
//       console.error(
//         "Copy failed:",
//         error
//       );
//     }
//   };

//   /* =====================================================
//      LEAVE MEETING
//   ===================================================== */

//   const leaveMeeting = () => {
//     captionsOnRef.current = false;
//     showTranslationRef.current = false;
//     listeningRef.current = false;

//     if (restartTimeoutRef.current) {
//       window.clearTimeout(
//         restartTimeoutRef.current
//       );
//     }

//     try {
//       recognitionRef.current?.stop();
//     } catch {
//       // Already stopped
//     }

//     cameraStreamRef.current
//       ?.getTracks()
//       .forEach((track) => track.stop());

//     screenStreamRef.current
//       ?.getTracks()
//       .forEach((track) => track.stop());

//     recognitionRef.current = null;

//     navigate("/");
//   };

//   /* =====================================================
//      RETRY PERMISSION
//   ===================================================== */

//   const retryPermission = () => {
//     startMedia();
//   };

//   /* =====================================================
//      SCREEN SHARE
//   ===================================================== */

//   const toggleScreenShare = async () => {
//     if (isScreenSharing) {
//       screenStreamRef.current
//         ?.getTracks()
//         .forEach((track) => track.stop());

//       screenStreamRef.current = null;

//       setIsScreenSharing(false);

//       if (videoRef.current) {
//         videoRef.current.srcObject =
//           cameraStreamRef.current;
//       }

//       return;
//     }

//     try {
//       const screenStream =
//         await navigator.mediaDevices.getDisplayMedia({
//           video: true,
//           audio: true,
//         });

//       screenStreamRef.current =
//         screenStream;

//       if (videoRef.current) {
//         videoRef.current.srcObject =
//           screenStream;
//       }

//       setIsScreenSharing(true);

//       const screenTrack =
//         screenStream.getVideoTracks()[0];

//       if (screenTrack) {
//         screenTrack.onended = () => {
//           screenStreamRef.current = null;

//           setIsScreenSharing(false);

//           if (videoRef.current) {
//             videoRef.current.srcObject =
//               cameraStreamRef.current;
//           }
//         };
//       }
//     } catch (error) {
//       console.log(
//         "Screen sharing cancelled:",
//         error
//       );
//     }
//   };

//   /* =====================================================
//      STOP SPEECH RECOGNITION
//   ===================================================== */

//   const stopCaptions = () => {
//     captionsOnRef.current = false;
//     listeningRef.current = false;

//     if (restartTimeoutRef.current) {
//       window.clearTimeout(
//         restartTimeoutRef.current
//       );

//       restartTimeoutRef.current = null;
//     }

//     if (recognitionRef.current) {
//       try {
//         recognitionRef.current.stop();
//       } catch {
//         // Already stopped
//       }

//       recognitionRef.current = null;
//     }

//     setCaptionsOn(false);
//     setCaptionText("");
//   };

//   /* =====================================================
//      START SPEECH RECOGNITION
//   ===================================================== */

//   const startCaptions = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert(
//         "Speech recognition is not supported in this browser."
//       );

//       return;
//     }

//     /* Prevent duplicate listeners */

//     if (listeningRef.current) {
//       return;
//     }

//     const recognition =
//       new SpeechRecognition();

//     recognition.continuous = true;
//     recognition.interimResults = true;

//     /* Selected speaking language */

//     recognition.lang =
//       languageCodes[
//         inputLanguageRef.current
//       ] || "en-US";

//     /* =================================================
//        SPEECH RESULT
//     ================================================= */

//     recognition.onresult = async (
//       event: SpeechRecognitionEvent
//     ) => {
//       let liveText = "";

//       for (
//         let i = event.resultIndex;
//         i < event.results.length;
//         i++
//       ) {
//         liveText +=
//           event.results[i][0].transcript;
//       }

//       liveText = liveText.trim();

//       /* Show speech immediately */

//       if (liveText) {
//         setCaptionText(liveText);
//       }

//       /* Get latest result */

//       const lastResult =
//         event.results[
//           event.results.length - 1
//         ];

//       /* Only translate FINAL speech */

//       if (
//         lastResult &&
//         lastResult.isFinal &&
//         showTranslationRef.current
//       ) {
//         const finalText =
//           lastResult[0].transcript.trim();

//         if (!finalText) {
//           return;
//         }

//         setTextToTranslate(finalText);
//         setTranslating(true);

//         try {
//           const result =
//             await translateText(
//               finalText,
//               targetLanguageRef.current
//             );

//           setTranslatedText(result);
//         } catch (error) {
//           console.error(
//             "Speech translation error:",
//             error
//           );

//           setTranslatedText(
//             "Translation failed."
//           );
//         } finally {
//           setTranslating(false);
//         }
//       }
//     };

//     /* =================================================
//        SPEECH ERROR
//     ================================================= */

//     recognition.onerror = (
//       event: SpeechRecognitionErrorEvent
//     ) => {
//       console.log(
//         "Speech recognition error:",
//         event.error
//       );

//       /*
//         Don't immediately stop the feature.
//         onend will restart recognition.
//       */

//       listeningRef.current = false;
//     };

//     /* =================================================
//        SPEECH END
//     ================================================= */

//     recognition.onend = () => {
//       listeningRef.current = false;
//       recognitionRef.current = null;

//       /*
//         User intentionally stopped
//       */

//       if (!captionsOnRef.current) {
//         return;
//       }

//       /*
//         Restart recognition automatically.
//       */

//       if (restartTimeoutRef.current) {
//         window.clearTimeout(
//           restartTimeoutRef.current
//         );
//       }

//       restartTimeoutRef.current =
//         window.setTimeout(() => {
//           if (
//             captionsOnRef.current &&
//             !listeningRef.current
//           ) {
//             startCaptions();
//           }
//         }, 500);
//     };

//     recognitionRef.current =
//       recognition;

//     listeningRef.current = true;

//     try {
//       recognition.start();

//       setCaptionsOn(true);

//       console.log(
//         "Listening started:",
//         recognition.lang
//       );
//     } catch (error) {
//       console.error(
//         "Could not start recognition:",
//         error
//       );

//       listeningRef.current = false;
//       recognitionRef.current = null;
//     }
//   };

//   /* =====================================================
//      TOGGLE CAPTIONS
//   ===================================================== */

//   const toggleCaptions = () => {
//     if (captionsOnRef.current) {
//       stopCaptions();
//     } else {
//       startCaptions();
//     }
//   };

//   /* =====================================================
//      GEMINI TEXT TRANSLATION
//   ===================================================== */

//   const handleTranslate = async () => {
//     if (!textToTranslate.trim()) {
//       alert(
//         "Please enter some text to translate."
//       );

//       return;
//     }

//     try {
//       setTranslating(true);
//       setTranslatedText("");

//       const result =
//         await translateText(
//           textToTranslate,
//           targetLanguage
//         );

//       setTranslatedText(result);
//     } catch (error) {
//       console.error(
//         "Translation error:",
//         error
//       );

//       setTranslatedText(
//         "Translation failed. Please check your Gemini API setup."
//       );
//     } finally {
//       setTranslating(false);
//     }
//   };

//   /* =====================================================
//      TOGGLE TRANSLATION
//   ===================================================== */

//   const toggleTranslation = () => {
//     if (showTranslationRef.current) {
//       showTranslationRef.current = false;

//       setShowTranslation(false);

//       /*
//         Stop speech when translation is closed.
//       */

//       if (captionsOnRef.current) {
//         stopCaptions();
//       }

//       return;
//     }

//     showTranslationRef.current = true;

//     setShowTranslation(true);

//     /*
//       Start listening automatically.
//     */

//     if (!captionsOnRef.current) {
//       startCaptions();
//     }
//   };

//   /* =====================================================
//      INPUT LANGUAGE CHANGE
//   ===================================================== */

//   const handleInputLanguageChange = (
//     language: string
//   ) => {
//     setInputLanguage(language);

//     inputLanguageRef.current =
//       language;

//     /*
//       If currently listening,
//       restart with new language.
//     */

//     if (captionsOnRef.current) {
//       stopCaptions();

//       setTimeout(() => {
//         startCaptions();
//       }, 600);
//     }
//   };

//   /* =====================================================
//      TARGET LANGUAGE CHANGE
//   ===================================================== */

//   const handleTargetLanguageChange = (
//     language: string
//   ) => {
//     setTargetLanguage(language);

//     targetLanguageRef.current =
//       language;
//   };

//   /* =====================================================
//      UI
//   ===================================================== */

//   return (
//     <main className="meeting-room">

//       {/* =================================================
//           HEADER
//       ================================================= */}

//       <header className="meeting-header">

//         <div className="meeting-logo">
//           EchoBridge
//         </div>

//         <div className="meeting-info">

//           <span className="meeting-id">
//             Meeting ID:{" "}
//             <strong>{meetingId}</strong>
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

//       {/* =================================================
//           PERMISSION ERROR
//       ================================================= */}

//       {permissionError && (
//         <div className="permission-box">

//           <h3>
//             Permission required
//           </h3>

//           <p>
//             Camera and microphone access is
//             blocked. Please allow access from
//             your browser settings.
//           </p>

//           <button
//             onClick={retryPermission}
//             className="retry-btn"
//           >
//             Try Again
//           </button>

//         </div>
//       )}

//       {/* =================================================
//           VIDEO AREA
//       ================================================= */}

//       <section className="meeting-content">

//         {/* YOUR VIDEO */}

//         <div className="video-card">

//           <video
//             ref={videoRef}
//             autoPlay
//             playsInline
//             muted
//             className={`live-video ${
//               !cameraOn && !isScreenSharing
//                 ? "video-hidden"
//                 : ""
//             }`}
//           />

//           {!cameraOn &&
//             !isScreenSharing && (
//               <div className="camera-off">

//                 <div className="user-icon">
//                   👤
//                 </div>

//                 <p>
//                   Camera is off
//                 </p>

//               </div>
//             )}

//           <span className="participant-name">
//             You
//           </span>

//         </div>

//         {/* WAITING CARD */}

//         <div className="waiting-card">

//           <div className="waiting-icon">
//             👥
//           </div>

//           <h3>
//             Waiting for participants
//           </h3>

//           <p>
//             Share the Meeting ID with others
//             to invite them.
//           </p>

//           <button
//             className="copy-meeting-btn"
//             onClick={copyMeetingId}
//           >
//             Copy Meeting ID
//           </button>

//         </div>

//       </section>

//       {/* =================================================
//           LIVE CAPTIONS
//       ================================================= */}

//       {captionsOn && (
//         <div className="caption-box">

//           <div className="captions-title">
//             💬 Live Captions
//           </div>

//           <div className="caption-text">
//             {captionText ||
//               "Listening..."}
//           </div>

//         </div>
//       )}

//       {/* =================================================
//           PARTICIPANTS
//       ================================================= */}

//       {showParticipants && (
//         <div className="participants-panel">

//           <button
//             className="close-participants"
//             onClick={() =>
//               setShowParticipants(false)
//             }
//           >
//             ×
//           </button>

//           <h3>
//             Participants
//           </h3>

//           <div className="participant-item">

//             <div className="participant-avatar">
//               👤
//             </div>

//             <div className="participant-info">

//               <strong>
//                 You
//               </strong>

//               <span>
//                 {cameraOn
//                   ? "Camera on"
//                   : "Camera off"}{" "}
//                 •{" "}
//                 {micOn
//                   ? "Mic on"
//                   : "Mic off"}
//               </span>

//             </div>

//           </div>

//           <div className="no-participants">
//             No other participants yet
//           </div>

//         </div>
//       )}

//       {/* =================================================
//           AI TRANSLATION PANEL
//       ================================================= */}

//       {showTranslation && (
//         <div className="translation-panel">

//           {/* PANEL HEADER */}

//           <div className="translation-header">

//             <div>

//               <h3>
//                 AI Translation
//               </h3>

//               <span className="translation-status">

//                 {translating
//                   ? "Translating..."
//                   : captionsOn
//                   ? "Listening..."
//                   : "Ready"}

//               </span>

//             </div>

//             <button
//               onClick={toggleTranslation}
//               className="close-translation"
//             >
//               ×
//             </button>

//           </div>

//           {/* =================================================
//               SPEAKING LANGUAGE
//           ================================================= */}

//           <div className="language-section">

//             <label>
//               🎤 Speak in
//             </label>

//             <select
//               value={inputLanguage}
//               onChange={(e) =>
//                 handleInputLanguageChange(
//                   e.target.value
//                 )
//               }
//             >

//               <option value="English">
//                 English
//               </option>

//               <option value="Hindi">
//                 Hindi
//               </option>

//               <option value="Spanish">
//                 Spanish
//               </option>

//               <option value="French">
//                 French
//               </option>

//               <option value="German">
//                 German
//               </option>

//               <option value="Korean">
//                 Korean
//               </option>

//               <option value="Japanese">
//                 Japanese
//               </option>

//               <option value="Chinese">
//                 Chinese
//               </option>

//               <option value="Italian">
//                 Italian
//               </option>

//               <option value="Portuguese">
//                 Portuguese
//               </option>

//             </select>

//           </div>

//           {/* =================================================
//               TEXT INPUT
//           ================================================= */}

//           <textarea
//             placeholder="Or type something to translate..."
//             value={textToTranslate}
//             onChange={(e) =>
//               setTextToTranslate(
//                 e.target.value
//               )
//             }
//           />

//           {/* =================================================
//               TARGET LANGUAGE
//           ================================================= */}

//           <div className="translation-controls">

//             <select
//               value={targetLanguage}
//               onChange={(e) =>
//                 handleTargetLanguageChange(
//                   e.target.value
//                 )
//               }
//             >

//               <option value="English">
//                 English
//               </option>

//               <option value="Hindi">
//                 Hindi
//               </option>

//               <option value="Spanish">
//                 Spanish
//               </option>

//               <option value="French">
//                 French
//               </option>

//               <option value="German">
//                 German
//               </option>

//               <option value="Korean">
//                 Korean
//               </option>

//               <option value="Japanese">
//                 Japanese
//               </option>

//               <option value="Chinese">
//                 Chinese
//               </option>

//               <option value="Italian">
//                 Italian
//               </option>

//               <option value="Portuguese">
//                 Portuguese
//               </option>

//             </select>

//             <button
//               className="translate-action-btn"
//               onClick={handleTranslate}
//               disabled={translating}
//             >
//               {translating
//                 ? "Translating..."
//                 : "Translate"}
//             </button>

//           </div>

//           {/* =================================================
//               TRANSLATION RESULT
//           ================================================= */}

//           {translatedText && (
//             <div className="translation-result">

//               <div className="translation-result-label">
//                 🌍 Translation
//               </div>

//               <p>
//                 {translatedText}
//               </p>

//             </div>
//           )}

//         </div>
//       )}

//       {/* =================================================
//           MEETING CONTROLS
//       ================================================= */}

//       <footer className="meeting-controls">

//         {/* CAMERA */}

//         <button
//           className={`control-btn ${
//             !cameraOn ? "off" : ""
//           }`}
//           onClick={toggleCamera}
//         >

//           <span className="control-icon">
//             {cameraOn
//               ? "📹"
//               : "🚫"}
//           </span>

//           <span>
//             {cameraOn
//               ? "Camera"
//               : "Camera Off"}
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
//             {micOn
//               ? "🎤"
//               : "🔇"}
//           </span>

//           <span>
//             {micOn
//               ? "Mic"
//               : "Mic Off"}
//           </span>

//         </button>

//         {/* CAPTIONS */}

//         <button
//           className={`control-btn ${
//             captionsOn
//               ? "active"
//               : ""
//           }`}
//           onClick={toggleCaptions}
//         >

//           <span className="control-icon">
//             💬
//           </span>

//           <span>
//             {captionsOn
//               ? "Captions On"
//               : "Captions"}
//           </span>

//         </button>

//         {/* TRANSLATE */}

//         <button
//           className={`control-btn ${
//             showTranslation
//               ? "active"
//               : ""
//           }`}
//           onClick={toggleTranslation}
//         >

//           <span className="control-icon">
//             🌍
//           </span>

//           <span>
//             {showTranslation
//               ? "Translation On"
//               : "Translate"}
//           </span>

//         </button>

//         {/* SCREEN SHARE */}

//         <button
//           className={`control-btn ${
//             isScreenSharing
//               ? "active"
//               : ""
//           }`}
//           onClick={toggleScreenShare}
//         >

//           <span className="control-icon">
//             🖥️
//           </span>

//           <span>
//             {isScreenSharing
//               ? "Stop Share"
//               : "Share Screen"}
//           </span>

//         </button>

//         {/* PARTICIPANTS */}

//         <button
//           className={`control-btn ${
//             showParticipants
//               ? "active"
//               : ""
//           }`}
//           onClick={() =>
//             setShowParticipants(
//               !showParticipants
//             )
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

//         <button className="control-btn">

//           <span className="control-icon">
//             •••
//           </span>

//           <span>
//             More
//           </span>

//         </button>

//         {/* END CALL */}

//         <button
//           className="end-call"
//           onClick={leaveMeeting}
//           title="Leave meeting"
//         >
//           📞
//         </button>

//       </footer>

//     </main>
//   );
// };

// export default MeetingRoom;





//component Based


// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import MeetingHeader from "../components/MeetingHeader";
// import MeetingControls from "../components/MeetingControls";
// import ParticipantsPanel from "../components/ParticipantsPanel";
// import LiveCaptions from "../components/LiveCaptions";
// import TranslationPanel from "../components/TranslationPanel";

// const MeetingRoom = () => {
//   const navigate = useNavigate();

//   // =========================
//   // MEETING
//   // =========================

//   const meetingId = "784 512 963";

//   const handleLeaveMeeting = () => {
//     navigate("/");
//   };

//   // =========================
//   // CAMERA / MIC
//   // =========================

//   const [cameraOn, setCameraOn] = useState(true);
//   const [micOn, setMicOn] = useState(true);

//   // Camera video reference
//   const videoRef = useRef<HTMLVideoElement>(null);

//   // =========================
//   // CAMERA ACCESS
//   // =========================

//   useEffect(() => {
//     let stream: MediaStream | undefined;

//     const startCamera = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: false,
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Camera error:", error);
//         setCameraOn(false);
//       }
//     };

//     if (cameraOn) {
//       startCamera();
//     }

//     return () => {
//       if (stream) {
//         stream.getTracks().forEach((track) => {
//           track.stop();
//         });
//       }
//     };
//   }, [cameraOn]);

//   // =========================
//   // CAPTIONS
//   // =========================

//   const [captionsOn, setCaptionsOn] = useState(true);
//   const [captionText] = useState("");

//   // =========================
//   // PARTICIPANTS
//   // =========================

//   const [showParticipants, setShowParticipants] = useState(true);

//   // =========================
//   // TRANSLATION
//   // =========================

//   const [showTranslation, setShowTranslation] = useState(true);

//   const [inputLanguage, setInputLanguage] =
//     useState("English");

//   const [targetLanguage, setTargetLanguage] =
//     useState("Spanish");

//   const [textToTranslate, setTextToTranslate] =
//     useState("");

//   const [translatedText, setTranslatedText] =
//     useState("");

//   const [translating, setTranslating] =
//     useState(false);

//   // =========================
//   // SCREEN SHARE
//   // =========================

//   const [isScreenSharing, setIsScreenSharing] =
//     useState(false);

//   // =========================
//   // CAMERA TOGGLE
//   // =========================

//   const handleCameraToggle = () => {
//     setCameraOn((prev) => !prev);
//   };

//   // =========================
//   // MIC TOGGLE
//   // =========================

//   const handleMicToggle = () => {
//     setMicOn((prev) => !prev);
//   };

//   // =========================
//   // CAPTIONS TOGGLE
//   // =========================

//   const handleCaptionsToggle = () => {
//     setCaptionsOn((prev) => !prev);
//   };

//   // =========================
//   // TRANSLATION TOGGLE
//   // =========================

//   const handleTranslationToggle = () => {
//     setShowTranslation((prev) => !prev);
//   };

//   // =========================
//   // PARTICIPANTS TOGGLE
//   // =========================

//   const handleParticipantsToggle = () => {
//     setShowParticipants((prev) => !prev);
//   };

//   // =========================
//   // SCREEN SHARE TOGGLE
//   // =========================

//   const handleScreenShareToggle = () => {
//     setIsScreenSharing((prev) => !prev);
//   };

//   // =========================
//   // TRANSLATE
//   // =========================

//   const handleTranslate = async () => {
//     if (!textToTranslate.trim()) {
//       return;
//     }

//     setTranslating(true);

//     try {
//       // Temporary testing
//       // Actual AI translation will be added later
//       setTranslatedText(textToTranslate);
//     } catch (error) {
//       console.error("Translation error:", error);
//     } finally {
//       setTranslating(false);
//     }
//   };

//   // =========================
//   // INPUT LANGUAGE
//   // =========================

//   const handleInputLanguageChange = (
//     language: string
//   ) => {
//     setInputLanguage(language);
//   };

//   // =========================
//   // UI
//   // =========================

//   return (
//     <div className="meeting-room">

//       {/* ================= HEADER ================= */}

//       <MeetingHeader
//         meetingId={meetingId}
//       />

//       {/* ================= MAIN AREA ================= */}

//       <main className="meeting-main">

//         {/* ================= VIDEO ================= */}

//         <div className="video-section">

//           <div className="video-placeholder">

//             {cameraOn ? (
//               <video
//                 ref={videoRef}
//                 autoPlay
//                 playsInline
//                 muted
//                 className="camera-video"
//               />
//             ) : (
//               <p>Camera Off</p>
//             )}

//           </div>

//         </div>

//         {/* ================= PARTICIPANTS ================= */}

//         {showParticipants && (
//           <ParticipantsPanel
//             showParticipants={showParticipants}
//             setShowParticipants={
//               setShowParticipants
//             }
//             cameraOn={cameraOn}
//             micOn={micOn}
//           />
//         )}

//       </main>

//       {/* ================= LIVE CAPTIONS ================= */}

//       <LiveCaptions
//         captionsOn={captionsOn}
//         captionText={captionText}
//       />

//       {/* ================= TRANSLATION ================= */}

//       {showTranslation && (
//         <TranslationPanel
//           showTranslation={showTranslation}
//           setShowTranslation={
//             setShowTranslation
//           }
//           inputLanguage={inputLanguage}
//           setInputLanguage={setInputLanguage}
//           targetLanguage={targetLanguage}
//           setTargetLanguage={setTargetLanguage}
//           textToTranslate={textToTranslate}
//           setTextToTranslate={
//             setTextToTranslate
//           }
//           translatedText={translatedText}
//           translating={translating}
//           captionsOn={captionsOn}
//           onTranslate={handleTranslate}
//           onInputLanguageChange={
//             handleInputLanguageChange
//           }
//         />
//       )}

//       {/* ================= BOTTOM CONTROLS ================= */}

//       <MeetingControls
//         cameraOn={cameraOn}
//         micOn={micOn}
//         captionsOn={captionsOn}
//         showTranslation={showTranslation}
//         isScreenSharing={isScreenSharing}
//         showParticipants={showParticipants}

//         onCameraToggle={
//           handleCameraToggle
//         }

//         onMicToggle={
//           handleMicToggle
//         }

//         onCaptionsToggle={
//           handleCaptionsToggle
//         }

//         onTranslationToggle={
//           handleTranslationToggle
//         }

//         onScreenShareToggle={
//           handleScreenShareToggle
//         }

//         onParticipantsToggle={
//           handleParticipantsToggle
//         }

//         onLeave={
//           handleLeaveMeeting
//         }
//       />

//     </div>
//   );
// };

// export default MeetingRoom;




import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import MeetingHeader from "../components/MeetingHeader";
import MeetingControls from "../components/MeetingControls";
import ParticipantsPanel from "../components/ParticipantsPanel";
import LiveCaptions from "../components/LiveCaptions";
import TranslationPanel from "../components/TranslationPanel";
import VideoSection from "../components/VideoSection";

const MeetingRoom = () => {
  const navigate = useNavigate();

  // =========================
  // MEETING
  // =========================

  // const meetingId = "784 512 963";

  const { meetingId = "Unknown" } = useParams();

  const handleLeaveMeeting = () => {
    navigate("/");
  };

  // =========================
  // CAMERA
  // =========================

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera/Microphone error:", error);
        setCameraOn(false);
        setMicOn(false);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  // =========================
  // CAMERA TOGGLE
  // =========================

  const handleCameraToggle = () => {
    setCameraOn((prev) => !prev);
  };

  // =========================
  // MIC TOGGLE
  // =========================

  const handleMicToggle = () => {
    setMicOn((prev) => !prev);
  };

  // =========================
  // CAPTIONS
  // =========================

  const [captionsOn, setCaptionsOn] = useState(true);
  const [captionText] = useState("");

  const handleCaptionsToggle = () => {
    setCaptionsOn((prev) => !prev);
  };

  // =========================
  // PARTICIPANTS
  // =========================

  const [showParticipants, setShowParticipants] = useState(true);

  const handleParticipantsToggle = () => {
    setShowParticipants((prev) => !prev);
  };

  // =========================
  // TRANSLATION
  // =========================

  const [showTranslation, setShowTranslation] = useState(true);

  const [inputLanguage, setInputLanguage] =
    useState("English");

  const [targetLanguage, setTargetLanguage] =
    useState("Spanish");

  const [textToTranslate, setTextToTranslate] =
    useState("");

  const [translatedText, setTranslatedText] =
    useState("");

  const [translating, setTranslating] =
    useState(false);

  const handleTranslationToggle = () => {
    setShowTranslation((prev) => !prev);
  };

  // =========================
  // TRANSLATE
  // =========================

  const handleTranslate = async () => {
    if (!textToTranslate.trim()) {
      return;
    }

    setTranslating(true);

    try {
      // Temporary translation
      setTranslatedText(textToTranslate);
    } catch (error) {
      console.error("Translation error:", error);
    } finally {
      setTranslating(false);
    }
  };

  // =========================
  // LANGUAGE
  // =========================

  const handleInputLanguageChange = (
    language: string
  ) => {
    setInputLanguage(language);
  };

  // =========================
  // SCREEN SHARE
  // =========================

  const [isScreenSharing, setIsScreenSharing] =
    useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharing((prev) => !prev);
  };

  // =========================
  // JSX
  // =========================

  return (
    <div className="meeting-room">

      {/* HEADER */}

      <MeetingHeader
        meetingId={meetingId}
        onLeave={handleLeaveMeeting}
      />

      {/* MAIN AREA */}

      <main className="meeting-main">

        {/* VIDEO */}

        {/* <div className="video-section">

          <div className="video-placeholder">

            {cameraOn ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="camera-video"
              />
            ) : (
              <p>Camera Off</p>
            )}

          </div>

        </div> */}

        {/* VIDEO */}

        <VideoSection
         videoRef={videoRef}
         cameraOn={cameraOn}
         isScreenSharing={isScreenSharing}
        /> 

        {/* PARTICIPANTS */}

        {showParticipants && (
          <ParticipantsPanel
            showParticipants={showParticipants}
            setShowParticipants={setShowParticipants}
            cameraOn={cameraOn}
            micOn={micOn}
          />
        )}

      </main>

      {/* LIVE CAPTIONS */}

      <LiveCaptions
        captionsOn={captionsOn}
        captionText={captionText}
      />

      {/* TRANSLATION */}

      {showTranslation && (
        <TranslationPanel
          showTranslation={showTranslation}
          setShowTranslation={setShowTranslation}
          inputLanguage={inputLanguage}
          setInputLanguage={setInputLanguage}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          translatedText={translatedText}
          translating={translating}
          captionsOn={captionsOn}
          onTranslate={handleTranslate}
          onInputLanguageChange={
            handleInputLanguageChange
          }
        />
      )}

      {/* BOTTOM CONTROLS */}

      <MeetingControls
        cameraOn={cameraOn}
        micOn={micOn}
        captionsOn={captionsOn}
        showTranslation={showTranslation}
        isScreenSharing={isScreenSharing}
        showParticipants={showParticipants}

        onCameraToggle={handleCameraToggle}
        onMicToggle={handleMicToggle}
        onCaptionsToggle={handleCaptionsToggle}
        onTranslationToggle={
          handleTranslationToggle
        }
        onScreenShareToggle={
          handleScreenShareToggle
        }
        onParticipantsToggle={
          handleParticipantsToggle
        }
        onLeave={handleLeaveMeeting}
      />

    </div>
  );
};

export default MeetingRoom;