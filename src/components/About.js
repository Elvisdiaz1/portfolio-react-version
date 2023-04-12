import React from "react";
import selfie from "../images/selfie.jpeg";

const About = () => {
  return (
    <section id="heading">
      <h2>About Me</h2>
      <img src={selfie} alt="picture of Elvis" />
      <p className="paragraph1">
        Hello everybody! My name is Elvis Diaz. I am a website developer fit for
        any needs you required. I am able to use developer programs such as
        HTML, CSS, Javascript, Node, and React.
      </p>
      <p className="paragraph2">
        Here in this page is a link to some of my projects I have built over
        time as well as links to my contacts such as my Github, Twitter, and
        Youtube. Hope you enjoy them and consider me for your team!
      </p>
    </section>
  );
};

export default About;
