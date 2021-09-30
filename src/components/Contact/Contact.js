import React from "react";
const API_KEY = "https://formspree.io/f/" + process.env.REACT_APP_API_KEY;

const ContactForm = () => {
  return (
    <>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="section-title">
            <h1>About</h1>
          </div>
          <div className="content">
            <form action={API_KEY} method="POST" id="email-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" value="send" className="submit-btn">
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
