import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact" id="contact">

      <section className="contact-intro">
        <h1>Contact EchoBridge</h1>
        <p>We'd love to hear from you.</p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>support@echobridge.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
            />

            <label>Message</label>
            <textarea
              placeholder="Type your message..."
              rows={5}
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </section>

    </main>
  );
};

export default Contact;