import React from "react";
import NavBar from "../component/Nav";
// Import simple versions without Material UI dependencies
import SchoolProjects from "../component/SchoolProjects";
import CVDownload from "../component/CVDownload";
import "./css/Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Tom Gijsbers</h1>
          <p className="hero-subtitle">
            Full-stack developer met een passie voor data en technologie. 
            Mijn reis van metaalindustrie naar IT illustreert mijn aanpassingsvermogen en 
            toewijding aan voortdurend leren en ontwikkelen.
          </p>
          <div>
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
            <li>Full-stack ontwikkeling met React, Node.js en moderne frameworks</li>
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
          <CVDownload />
        </div>
      </div>
    </>
  );
};

export default Home;