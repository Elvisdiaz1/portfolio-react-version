// App Organizer
import React, { useState } from "react";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import style from "./style.css";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

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
