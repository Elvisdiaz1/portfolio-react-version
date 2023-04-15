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
            <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj4iIex24T9AhUcEFkFHcbECxIQPAgJ">
              <div className="project-text">
                <h5>Calculator</h5>
                <p>JavaScript</p>
                <h6>Click here to view project</h6>
              </div>
            </a>
          </section>

          <section className="card" id="project2">
            <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj4iIex24T9AhUcEFkFHcbECxIQPAgJ">
              <div className="project-text">
                <h5>Recipes</h5>
                <p>React</p>
                <h6>Click here to view project</h6>
              </div>
            </a>
          </section>

          <section className="card" id="project3">
            <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj4iIex24T9AhUcEFkFHcbECxIQPAgJ">
              <div className="project-text">
                <h5>Tic-Tac-Toe</h5>
                <p>JavaScript</p>
                <h6>Click here to view project</h6>
              </div>
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

export default Project;
