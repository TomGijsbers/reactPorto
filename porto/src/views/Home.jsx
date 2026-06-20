import React, { useState } from "react";
import NavBar from "../component/Nav";
import Footer from "../component/Footer";
import "./css/Home.css";
import "../tailwind.css"; 

const Home = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

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
              Software Engineer @ Vencomatic Group
            </div>
            <h1 className="bento-title">Tom Gijsbers</h1>
            <h2 className="bento-subtitle">Bachelor Toegepaste Informatica</h2>
            <p className="bento-text">
              Gedreven door technologie, architectuur en innovatie. Mijn reis van de precisie in de metaalindustrie naar de logica van de IT weerspiegelt mijn passie voor een leven lang leren, technisch inzicht en een no-nonsense werkmentaliteit.
            </p>
          </div>
      {/* 2. Action Tile */}
          <div className="bento-card action-card">
            <h3>Projecten & Architectuur</h3>
            <p>Van complexe database-optimalisaties tot strakke frontend-interfaces: duik in de techniek, code en architecturale keuzes achter mijn werk.</p>
          </div>


          {/* 2. Welcome & Intro Tile (Replaces the Jury message) */}
          <div className="bento-card bio-card" style={{ gridColumn: "1 / -1",  }}>
            <h3>Welkom op mijn portfolio</h3>
            <p>
              Als Full-Stack Software Engineer combineer ik mijn hands-on ervaring uit de maakindustrie met moderne IT-architectuur. Ik ben gespecialiseerd in het doorgronden van complexe bedrijfsprocessen en het vertalen hiervan naar robuuste, schaalbare webapplicaties. 
              <br /><br />
              Op deze website vind je een overzicht van mijn projecten, mijn afstudeerstage en de technische oplossingen die ik heb gerealiseerd om data-integriteit en performance te garanderen.
            </p>
          </div>

          {/* 3. Experience Tile (Combined Stage & New Job) */}
          <div className="bento-card bio-card">
            <h3>Van Stage naar Praktijk</h3>
            <p>
              Tijdens mijn afstudeerstage bij FourIQ heb ik met succes een geavanceerde Management Rapportage Tool ontwikkeld, waarbij de focus lag op backend-optimalisatie (Eager Loading, Service Objects) en asynchrone frontend-interfaces. Inmiddels breng ik deze theorie volledig in de praktijk in mijn rol als Software Engineer bij Vencomatic Group, waar we intelligente oplossingen bouwen voor de wereldwijde agrarische sector.
            </p>
          </div>

          {/* 4. Skills Tile */}
          <div className="bento-card skills-card">
            <h3>Expertise & Stack</h3>
            <ul className="bento-skills-list">
              <li>Ruby on Rails & C#</li>
              <li>React, StimulusJS & Hotwire</li>
              <li>SQL & Database Optimalisatie</li>
              <li>Python (IoT & Data)</li>
              <li>Flutter Mobile</li>
              <li>BPMN & Procesanalyse</li>
              <li>TIG & MIG Lassen (Staal/RVS/Alu)</li>
              <li>Robotprogrammering</li>
            </ul>
          </div>

        </div>

        {/* Footer Note */}
        <div className="jury-banner" style={{ marginTop: "2rem", opacity: 0.8, fontSize: "0.9rem" }}>
          ✨ Trots afgestudeerd: De projecten op dit portfolio hebben bijgedragen aan het succesvol afronden van mijn bachelorproef.
        </div>

      </div>
    </div>
  );
};

export default Home;