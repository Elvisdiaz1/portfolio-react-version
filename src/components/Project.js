import React from "react";
import historWeImg from "../images/historWe.png";
import passwordGen from "../images/passwordGenerator.png";
import breezyImg from "../images/breezyCocktail.png";
import gameboxdImg from "../images/gameboxd.png";
import crypto from "../images/Crypto.png";
import digitalClockImg from "../images/digital-clock.png";

const style = {
  color: {
    backgroundColor: "white",
  },
};

const Project = () => {
  return (
    <>
      <section id="project-container" style={style.color}>
        <h2>My Projects</h2>
        <div id="card-container">
          <div id="project-flex">
            <div className="projects">
              <p>
                <img
                  className="img-contain"
                  src={breezyImg}
                  alt="Breezy-Cocktail-Img"
                />
              </p>
              <h4 class="project-start" id="first-line">
                Breezy Cocktail
                <p className="tech-used">HTML/CSS/Javascript</p>
                <p>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://github.com/keimdm/recipe-search"
                    >
                      Github
                    </a>
                  </span>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://keimdm.github.io/recipe-search/"
                    >
                      Demo
                    </a>
                  </span>
                </p>
              </h4>
            </div>
            <div className="projects">
              <p>
                <img src={passwordGen} alt="Password-Gen-Img" />
              </p>
              <h4 class="project-mid" id="second-line">
                Password Generator
                <p className="tech-used">HTML/CSS/Javascript</p>
                <p>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://github.com/Elvisdiaz1/password-generator"
                    >
                      Github
                    </a>
                  </span>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://elvisdiaz1.github.io/password-generator/"
                    >
                      Demo
                    </a>
                  </span>
                </p>
              </h4>
            </div>
            <div className="projects">
              <p>
                <img src={crypto} alt="Crypto-Img" />
              </p>
              <h4 class="project-mid" id="second-line">
                Crypto Blog
                <p className="tech-used">HTML/CSS</p>
                <p>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://github.com/Elvisdiaz1/Crypto-blog-site"
                    >
                      Github
                    </a>
                  </span>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://elvisdiaz1.github.io/Crypto-blog-site/"
                    >
                      Demo
                    </a>
                  </span>
                </p>
              </h4>
            </div>
            {/* <div className="projects">
              <p>
                <img
                  className="img-cover"
                  src={historWeImg}
                  alt="HistorWe-Img"
                />
              </p>
              <h4 class="project-end" id="third-line">
                HistorWe
                <p className="tech-used">Express/MySql/Node</p>
                <p>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://github.com/Smulchman/historical-media"
                    >
                      Github
                    </a>
                  </span>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://calm-castle-61617.herokuapp.com/"
                    >
                      Demo
                    </a>
                  </span>
                </p>
              </h4>
            </div> */}
            <div className="projects">
              <p>
                <img
                  className="img-contain"
                  src={digitalClockImg}
                  alt="Digital-Clock"
                />
              </p>
              <h4 class="project-end" id="third-line">
                Digital Clock
                <p className="tech-used">HTML/CSS/Javascript</p>
                <p>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://github.com/Elvisdiaz1/digitial-clock"
                    >
                      Github
                    </a>
                  </span>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://elvisdiaz1.github.io/digitial-clock/"
                    >
                      Demo
                    </a>
                  </span>
                </p>
              </h4>
            </div>
            {/* <div className="projects">
              <p href="https://www.google.com/?&bih=816&biw=1920&hl=en">
                <img
                  className="img-contain"
                  src={gameboxdImg}
                  alt="Gameboxd-Img"
                />
              </p>
              <h4 class="project-start" id="fourth-line">
                GameBoxd
                <p className="tech-used">React/JWT/MongoDB</p>
                <p>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://github.com/Smulchman/gameboxd"
                    >
                      Github
                    </a>
                  </span>
                  <span className="button-spacing">
                    <a
                      className="button"
                      href="https://gameboxed.herokuapp.com/"
                    >
                      Demo
                    </a>
                  </span>
                </p>
              </h4>
            </div> */}
            {/* <div className="projects">
              <p
                class="no-padding"
                id="fifth-pic"
                href="https://www.google.com/?&bih=816&biw=1920&hl=en"
              >
                <img src={breezyImg} alt="map" />
              </p>
              <h4 class="project-mid" id="fifth-line">
                World Map
              </h4>
            </div> */}
            {/* <div className="projects">
              <p
                class="no-padding"
                id="sixth-pic"
                href="https://www.google.com/?&bih=816&biw=1920&hl=en"
              >
                <img src={breezyImg} alt="quote" />
              </p>
              <h4 class="project-end" id="sixth-line">
                Quote Machine
              </h4>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
