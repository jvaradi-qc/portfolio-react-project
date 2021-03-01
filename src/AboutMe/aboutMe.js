import React, { Component } from "react";
import manSit from "./manOnTable.svg";
import resume from "./Resume.pdf";
import "./aboutMe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe-section" id="aboutMe">
        <div className="short-bio">
          <div className="short-bio-text">
            <h1>Hi I'm John.</h1>
            <p>
              I am currently studying computer science at Queens College in NYC. 
              I'm a passionate Software Developer 🚀 experienced with databases, interface development, 
              healthcare IT and programming languages
              including JavaScript / React / Python / Django / Java / SQL and some
              other cool libraries and frameworks
            </p>
            <Button
              // insert your own resume pdf link in href
              href={resume}
            >
              See My Resume
            </Button>
            <div className="dev-icons">
              <p className="dev-icons-subTitle">Check Out My Tech Stack</p>
              <FaHtml5 />
              <FaCss3Alt />
              <FaPython />
              <FaJava />
              <SiCplusplus />
            </div>
          </div>
          <div>
            <img className="short-bio-img" alt="man sitting" src={manSit} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
