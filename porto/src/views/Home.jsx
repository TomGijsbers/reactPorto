import React, { useState, useEffect } from "react";
import NavBar from "../component/Nav";
// Import simple versions without Material UI dependencies
import SchoolProjects from "../component/SchoolProjects";
import CVDownload from "../component/CVDownload";
import Footer from "../component/Footer";
import "./css/Home.css";
import "../tailwind.css"; // Import Tailwind CSS

const Home = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  // Check for user's preferred color scheme
  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setDarkMode(prefersDarkMode);
    
  //   // Listen for changes in color scheme preference
  //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   const handleChange = (e) => setDarkMode(e.matches);
  //   mediaQuery.addEventListener('change', handleChange);
    
  //   return () => mediaQuery.removeEventListener('change', handleChange);
  // }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="home-container">
        {/* Modern Bento Grid Layout */}
        <div className="bento-grid">
          {/* 1. Main Hero Tile */}
          <div className="bento-card hero-card">
            <div className="status-badge">
              <span className="status-dot"></span>
              Student Toegepaste Informatica
            </div>
            <h1 className="bento-title">Tom Gijsbers</h1>
            <h2 className="bento-subtitle">Full-Stack Developer in Opleiding &<br/>Data Enthusiast</h2>
            <p className="bento-text">
              Gedreven door technologie, data en innovatie. Ik bouw moderne webapplicaties met oog voor detail en performance.
            </p>
          </div>

          {/* 2. Action Tile */}
          <div className="bento-card action-card">
            <h3>Welkom</h3>
            <p>Bekijk mijn groei en projecten tijdens mijn studie.</p>
            <div className="bento-actions">
              <a href="#projects" className="bento-btn primary">Mijn Projecten</a>
              <a href="#contact" className="bento-btn secondary">Meer Info</a>
            </div>
          </div>

          {/* 3. Bio Tile */}
          <div className="bento-card bio-card">
            <h3>Mijn Verhaal</h3>
            <p>
              Van de precisie van de metaalindustrie naar de logica van IT. 
              Mijn achtergrond illustreert mijn aanpassingsvermogen en toewijding 
              aan voortdurend leren. Momenteel bachelor student Toegepaste Informatica.
            </p>
          </div>

          {/* 4. Skills Tile */}
          <div className="bento-card skills-card">
            <h3>Expertise</h3>
            <ul className="bento-skills-list">
              <li>React & Angular</li>
              <li>MongoDB & SQL</li>
              <li>Flutter Mobile</li>
              <li>Data Analysis</li>
              <li>TIG & MIG Welding (Steel/SS/Alu)</li>
              <li>Robot Welding (Cloos Group & Valk Welding)</li>
              <li>Problem Solving</li>
              <li>Modern UI/UX</li>
            </ul>
          </div>
        </div>
        
        {/* School Projects Section */}
        <div id="projects">
          <SchoolProjects />
        </div>
        
        {/* CV Download Section */}
        <div id="contact">
          <CVDownload darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;