import React, { useState } from "react";
import NavBar from "../component/Nav";
import SchoolProjects from "../component/SchoolProjects";
import Footer from "../component/Footer";
import "./css/Home.css";

const Projects = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="home-container" style={{ paddingTop: "2rem" }}>
        <SchoolProjects />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
