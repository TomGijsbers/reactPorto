import React, { useState, useEffect } from "react";
import NavBar from "../component/Nav";
// Import simple versions without Material UI dependencies
import SchoolProjects from "../component/SchoolProjects";
import CVDownload from "../component/CVDownload";
import Footer from "../component/Footer";
import "./css/Home.css";

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
      
      {/* Hero Section with enhanced styling */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">Tom Gijsbers</h1>
          <p className="hero-subtitle">
            Full-stack developer met een passie voor data en technologie. 
            Mijn reis van metaalindustrie naar IT illustreert mijn aanpassingsvermogen en 
            toewijding aan voortdurend leren en ontwikkelen.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-cta">Bekijk Projecten</a>
            <a href="#contact" className="hero-cta">Neem Contact Op</a>
          </div>
        </div>
      </section>
      
      <div className="home-container">
        {/* Introduction */}
        <div className="construction-card">
          <h1>Welkom op mijn Portfolio</h1>
          <p>
            Ik ben een Full-stack developer met een achtergrond in de metaalindustrie. 
            Momenteel volg ik een bacheloropleiding Toegepaste Informatica om mijn vaardigheden 
            verder te ontwikkelen en mijn passie voor technologie na te streven.
          </p>
          
          <ul className="feature-list">
            <li>Full-stack ontwikkeling met React, Angular en moderne frameworks</li>
            <li>Database-ervaring met MongoDB en SQL</li>
            <li>Mobile development met Flutter</li>
            <li>Ervaring met data visualisatie en analyse</li>
            <li>Sterke probleemoplossingsvaardigheden uit mijn technische achtergrond</li>
          </ul>
        </div>
        
        {/* School Projects Section */}
        <div id="projects">
          <SchoolProjects />
        </div>
        
        {/* CV Download Section */}
        <div id="contact">
          <CVDownload  />
        </div>
      </div>
    </div>
  );
};

export default Home;