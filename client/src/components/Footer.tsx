// import "./Footer.css"
// const Footer = () => {
//   return (
//     <footer>
//       <div>
//         <a href="/">About</a> |{" "}
//         <a href="/">Privacy</a> |{" "}
//         <a href="/">Contact</a>
//       </div>
//       <p>© 2026 EchoBridge. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;





import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>
            Echo<span>Bridge</span>
          </h2>

          <p>
            Breaking language barriers,
            one conversation at a time.
          </p>
        </div>

        <div className="footer-links">

          <a href="/">Home</a>

          <a href="#features">Features</a>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 EchoBridge. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;