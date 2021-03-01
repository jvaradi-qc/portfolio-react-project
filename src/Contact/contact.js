import React, { Component } from "react";
import "./contact.css";
import linkedIn from "./LI-In-Bug.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <div className="contact">
          <h1 className="contact-title"> Let's Work Together </h1>
          <p classname="contact-body">
            I'm always looking for new opportunities and exciting projects to
            collaborate with. With my specialty in database development and ETL projects, I will
            help with automating your workflows. We can connect via LinkedIn or
            email. Please get in touch and I will most definitely contact about
            building a solution together.
          </p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="footer">
          <h1>John Varadi</h1>
          <div className="info">
            <p>
              110-45 Queens Blvd, Apt 601 <br />
              Forest Hills, NY 11375
            </p>
            <p>
              (718)772-1073 <br />
              jvaradi329@gmail.com <br />
              <a href="https://www.linkedin.com/in/john-varadi-b28a473"><img src={linkedIn} alt="LinkedIn" width="20" height="20"></img></a>
            </p>
          </div>
          <p>
            Made by <u>John Varadi</u>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
