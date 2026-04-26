import React, { useState } from "react";
import NavBar from "../component/Nav";
import PVADocument from "../assets/PVA_TomGijsbers.pdf";
import "./css/Stage.css";

const Stage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="stage-container">
        <section className="stage-card">
          <header className="stage-header">
            <h1>Management Rapportage Tool</h1>
            <h2 className="company-name">FourIQ</h2>
            
            {/* Tech Stack Badges */}
            <div className="tech-stack">
              <span className="tech-badge">Ruby on Rails</span>
              <span className="tech-badge">StimulusJS</span>
              <span className="tech-badge">MariaDB</span>
              <span className="tech-badge">Redis</span>
              <span className="tech-badge">RSpec</span>
            </div>
          </header>

          <div className="stage-content">
            <div className="content-block">
              <h3>De Context</h3>
              <p>
                Tijdens mijn stage werkte ik als software developer bij FourIQ, een
                bedrijf gespecialiseerd in het meten en monitoren van gebouwinstallaties.
                De huidige applicatie draait op een Ruby on Rails backend, gehost via Docker en Kubernetes. 
                Hoewel het platform perfect inzoomt op losse gebouwen, ontbrak er een centraal managementoverzicht 
                over de hele vastgoedportefeuille. Klanten kregen hun rapportages via een tijdrovend en foutgevoelig 
                handmatig Excel-proces.
              </p>
            </div>

            <div className="content-block">
              <h3>Mijn Rol & Architectuur</h3>
              <p>
                Mijn hoofdtaak was het ontwerpen en ontwikkelen van een schaalbare, geautomatiseerde 
                rapportagetool. Na een uitgebreide analyse van de bestaande codebase ben ik afgestapt van 
                standaard synchrone weergaves en heb ik de focus gelegd op performance en stabiliteit. 
                Mijn belangrijkste technische realisaties waren:
              </p>
              <ul className="custom-list">
                <li>
                  <strong>Backend Refactoring:</strong> Migratie van een "Fat Controller" naar modulaire <i>Service Objects</i> en een DTO-patroon (Single Source of Truth).
                </li>
                <li>
                  <strong>Performance Optimalisatie:</strong> Het oplossen van complexe N+1 query problemen door middel van geavanceerde <i>Eager Loading</i> en het reduceren van Garbage Collection responstijden met 25%.
                </li>
                <li>
                  <strong>Asynchrone Frontend:</strong> Ontwikkeling van een interactieve UI via <i>StimulusJS</i> en de Fetch API. Introductie van Lazy Loading per tabelrij met resource-protectie via een native <code>AbortController</code>.
                </li>
                <li>
                  <strong>Context-Aware Export:</strong> Het bouwen van een "Smart Export" naar Excel, waarbij actieve client-side filters via JSON-payloads asynchroon worden verwerkt.
                </li>
              </ul>
            </div>

            <div className="content-block">
              <h3>Resultaat & Leermomenten</h3>
              <p>
                Aan het einde van de stage stond er een snelle, dynamische tool (met een Time-To-First-Byte van &lt; 0.5s) 
                waarmee klanten autonoom en foutloos hun rapportages kunnen genereren en exporteren.
              </p>
              <p>
                Tijdens dit project heb ik enorm veel geleerd. Niet alleen over het werken in een professionele Ruby on Rails stack, 
                maar vooral over software-architectuur. Ik heb in de praktijk ervaren wat de impact is van de <i>Global Interpreter Lock (GIL)</i> bij multithreading, 
                hoe je een database Connection Pool beschermt, en hoe essentieel Code Reviews en DRY-principes zijn in een professioneel team.
              </p>
            </div>
          </div>

          <div className="download-section">
            <h3>Documentatie & Bewijsstukken</h3>
            <div className="download-grid">
              <a href={PVADocument} download className="download-btn" aria-label="Download Plan van Aanpak">
                <span className="icon">📄</span> Plan van Aanpak
              </a>
              <a href="#" className="download-btn" aria-label="Download Realisatiedocument">
                <span className="icon">🏗️</span> Realisatiedocument
              </a>
              <a href="#" className="download-btn" aria-label="Download Reflectiedocument">
                <span className="icon">💡</span> Reflectiedocument
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stage;