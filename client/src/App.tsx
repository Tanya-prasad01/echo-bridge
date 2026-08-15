// import { BrowserRouter, Routes, Route} from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import MeetingRoom from "./pages/MeetingRoom"

// function App() {
//   return (
//     <BrowserRouter>

//       {!isMeetingRoom && <Navbar />}

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />

//         <Route path="/meeting" element={<MeetingRoom />} />

//       </Routes>

//     </BrowserRouter>
    
//   );
// }

// export default App;





// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import MeetingRoom from "./pages/MeetingRoom";

// function AppContent() {
//   const location = useLocation();

//   // Agar current page /meeting hai
//   const isMeetingRoom = location.pathname === "/meeting";

//   return (
//     <>
//       {/* Meeting page par Navbar nahi dikhega */}
//       {!isMeetingRoom && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />

//         <Route path="/meeting" element={<MeetingRoom />} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;







import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MeetingRoom from "./pages/MeetingRoom";

function AppContent() {
  const location = useLocation();

  // Meeting page par Navbar nahi dikhega
  const isMeetingRoom = location.pathname.startsWith("/meeting");

  return (
    <>
      {!isMeetingRoom && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/meeting/ " element={<MeetingRoom />} /> */}
        <Route path="/meeting/:meetingId" element={<MeetingRoom />}
/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;