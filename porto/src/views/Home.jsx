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
              Kandidaat Bachelor Toegepaste Informatica
            </div>
            <h1 className="bento-title">Tom Gijsbers</h1>
            <h2 className="bento-subtitle">Klaar voor de praktijk als Software Engineer</h2>
            <p className="bento-text">
              Gedreven door technologie, architectuur en innovatie. Mijn reis van de maakindustrie naar de IT weerspiegelt mijn passie voor een leven lang leren, technisch inzicht en een no-nonsense werkmentaliteit.
            </p>
          </div>

          {/* 2. Action Tile */}
          <div className="bento-card action-card">
            <h3>Documentatie & Bewijslast</h3>
            <p>Alle projecten, technische analyses en afstudeerdocumenten staan geoptimaliseerd klaar voor beoordeling.</p>
            <div className="bento-actions">
              <a href="/projects" className="bento-btn primary">Mijn Projecten</a>
              <a href="/stage" className="bento-btn secondary">Naar Stage</a>
            </div>
          </div>

          {/* 3. Jury Bio Tile - Inline style forceren naar volle breedte */}
          <div className="bento-card bio-card" style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            <h3>Verantwoording & Portfolio</h3>
            <p>
              Beste examencommissie, welkom. Dit portfolio vormt het sluitstuk van mijn opleiding. Met succes heb ik de afgelopen tijd bewezen dat ik in staat ben om complexe bedrijfsprocessen te vertalen naar robuuste, schaalbare Full-Stack webapplicaties.
              <br /><br />
              Via de documentatie en projecten op deze website lever ik het keiharde bewijs dat ik de vereiste HBO-competenties op het gebied van softwareontwikkeling, architectuur en data-integriteit volledig beheers. Ik ben klaar voor de beroepspraktijk en verdien hiermee de titel Bachelor Toegepaste Informatica.
            </p>
          </div>
        </div>



        <div className="bento-card bio-card">
          <h3>Afstudeerstage: FourIQ</h3>
          <p>
            Tijdens mijn afstudeerperiode heb ik succesvol een geavanceerde Management Rapportage Tool ontworpen en ontwikkeld. Van het oplossen van complexe database-queries tot het bouwen van een interactieve interface voor gebouwbeheerders.
          </p>
        </div>
        <div className="bento-card bio-card" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <h3>Naar Software Engineer</h3>
          <p>
            Inmiddels vertaal ik bedrijfsprocessen naar schaalbare IT-architectuur. Met ervaring in Ruby on Rails, React, en Python IoT-systemen, ben ik in staat om zowel strakke interfaces als veilige backend-systemen te realiseren. Recent gestart als Software Engineer, klaar om de theorie volledig in de praktijk te brengen.
          </p>
        </div>

        <div className="jury-banner">
          ✨ AI-Gedreven Ontwikkeling: Dit portfolio en de bijbehorende processen zijn deels tot stand gekomen met ondersteuning van geavanceerde AI-tools.
        </div>

        {/* <div className="bento-card bio-card">
            <h3>Mijn Verhaal</h3>
            <p>
              Van de precisie van de metaalindustrie naar de logica van IT. 
              Mijn achtergrond illustreert mijn aanpassingsvermogen en toewijding 
              aan voortdurend leren. Momenteel bachelor student Toegepaste Informatica.
            </p>
          </div> */}
        {/* 3. Bio Tile */}
        {/* <div className="bento-card bio-card">
            <h3>Mijn Verhaal</h3>
            <p>
              Van de precisie van de metaalindustrie naar de logica van IT. 
              Mijn achtergrond illustreert mijn aanpassingsvermogen en toewijding 
              aan voortdurend leren. Momenteel bachelor student Toegepaste Informatica.
            </p>
          </div> */}

        {/* 4. Skills Tile */}
        {/* <div className="bento-card skills-card">
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
          </div> */}
      </div>



      {/* CV Download Section */}
      {/* <div id="contact">
          <CVDownload darkMode={darkMode} />
        </div> */}
    </div>
    // </div>
  );
};

export default Home;
