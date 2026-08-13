// import "./MeetingHeader.css";

// interface MeetingHeaderProps {
//   meetingId: string;
//   onLeave: () => void;
// }

// const MeetingHeader = ({
//   meetingId,
//   onLeave,
// }: MeetingHeaderProps) => {

//   const copyMeetingId = async () => {
//     await navigator.clipboard.writeText(meetingId);
//     alert("Meeting ID copied!");
//   };

//   return (
//     <header className="meeting-header">

//       <div className="meeting-logo">
//         EchoBridge
//       </div>

//       <div className="meeting-header-right">

//         <span className="meeting-id">
//           Meeting ID: <strong>{meetingId}</strong>
//         </span>

//         <button
//           className="copy-button"
//           onClick={copyMeetingId}
//         >
//           Copy
//         </button>

//         <button
//           className="leave-button"
//           onClick={onLeave}
//         >
//           Leave Meeting
//         </button>

//       </div>

//     </header>
//   );
// };

// export default MeetingHeader;




import "./MeetingHeader.css";

interface MeetingHeaderProps {
  meetingId: string;
  onLeave: () => void;
}

const MeetingHeader = ({
  meetingId,
  onLeave,
}: MeetingHeaderProps) => {

  const copyMeetingId = async () => {
    await navigator.clipboard.writeText(meetingId);
    alert("Meeting ID copied!");
  };

  return (
    <header className="meeting-header">

      <div className="meeting-logo">
        EchoBridge
      </div>

      <div className="meeting-header-right">

        <span className="meeting-id">
          Meeting ID: <strong>{meetingId}</strong>
        </span>

        <button
          className="copy-button"
          onClick={copyMeetingId}
        >
          Copy
        </button>

        <button
          className="leave-button"
          onClick={onLeave}
        >
          Leave Meeting
        </button>

      </div>

    </header>
  );
};

export default MeetingHeader;