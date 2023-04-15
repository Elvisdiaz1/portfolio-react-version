import React from "react";
import resume from "../images/resume.pdf";

const Resume = () => {
  return (
    <div id="resume-container">
      <h1 id="resume-title">My Resume</h1>
      <div id="resume">
        <span>Front End Specialities</span>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
        </ul>
        <span>Back End Specialities</span>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>MySQL & Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>Express</li>
        </ul>
        <p id="resume-download">
          Check out my resume!{" "}
          <a id="resume-download-link" href={resume} download>
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
