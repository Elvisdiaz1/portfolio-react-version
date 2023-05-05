import React from "react";

// Nav Bar
const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <h1>Elvis</h1>
      <ul>
        <li>
          <a href="#about" onClick={() => handlePageChange("About")}>
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>

        <li>
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
