// App Organizer
import React, { useState } from "react";
import Portfolio from "./Portfolio";

import Resume from "./Resume";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
// Imports style for whole app
import style from "./style.css";

// Changes pages depending on what is the current page
const Page = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };
  // Sets the current page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Page;
