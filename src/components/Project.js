import React from "react";

const style = {
  color: {
    backgroundColor: "#252525",
  },
};

const Project = () => {
  return (
    <>
      <section id="project-container" style={style.color}>
        <h2>My Projects</h2>
        <div id="card-container">
          <section className="card " id="project1">
            <a href="https://calm-castle-61617.herokuapp.com/">
              <div className="project-text">
                <h5>History Social Media</h5>
                <p>JavaScript/Node/MySql</p>
                <h6>Click here to view project</h6>
                <a href="https://github.com/Smulchman/historical-media">
                  Click here for the GitHub Repo
                </a>
              </div>
            </a>
          </section>

          <section className="card" id="project2">
            <a href="https://keimdm.github.io/recipe-search/">
              <div className="project-text">
                <h5>Recipes</h5>
                <p>JavaScript/CSS/HTML</p>
                <h6>Click here to view project</h6>
                <a href="https://github.com/keimdm/recipe-search">
                  Click here for the GitHub Repo
                </a>
              </div>
            </a>
          </section>

          <section className="card" id="project3">
            <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj4iIex24T9AhUcEFkFHcbECxIQPAgJ">
              <div className="project-text">
                <h5>Password Generator</h5>
                <p>JavaScript/HTML/CSS</p>
                <h6>Click here to view project</h6>
                <a href="https://elvisdiaz1.github.io/password-generator/">
                  Click here for the GitHub Repo
                </a>
              </div>
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

export default Project;
