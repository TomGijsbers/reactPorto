import React, { useState } from "react";
import NavBar from "../component/Nav";
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
          <h1>Stage: Management Rapportage Tool</h1>
          <h2>FourIQ</h2>

          <h3>FourIQ</h3>
          <p>
            Tijdens mijn stage werkte ik als software developer bij FourIQ, een
            bedrijf gespecialiseerd in het meten en monitoren van gebouwinstallaties.
            Ze helpen grote vastgoedbeheerders, zoals gemeentes en scholenkoepels,
            om te voldoen aan strenge duurzaamheidswetgeving (zoals de WEii-standaard).
            Het interne development-team bestaat uit zes personen die continu werken
            aan de doorontwikkeling van het platform.
          </p>

          <h3>De Technische Context</h3>
          <p>
            De huidige applicatie draait op een Ruby on Rails backend, met services
            zoals MariaDB en Redis gehost via Docker en Kubernetes. Hoewel het platform
            perfect inzoomt op losse gebouwen, ontbrak er een centraal managementoverzicht
            over de hele vastgoedportefeuille. Klanten kregen hun rapportages via een
            tijdrovend en foutgevoelig handmatig Excel-proces dat door medewerkers van
            FourIQ werd uitgevoerd.
          </p>

          <h3>Mijn Rol</h3>
          <p>
            Mijn hoofdtaak was het ontwikkelen van een geautomatiseerde management
            rapportagetool die dit handmatige proces volledig verving. Na een uitgebreide
            analyse van de bestaande codebase en datastructuur, ben ik aan de slag gegaan
            met de implementatie. Mijn werkzaamheden bestonden onder andere uit:
          

          <ul>
            <li>
              - Het analyseren en aggregeren van complexe datastructuren vanuit Redis en MariaDB.
            </li>
            <li>
              - Het bouwen van een interactieve frontend met asynchrone, dynamische filters
              met behulp van Hotwire (Turbo Frames) en Stimulus, zonder page reloads.
            </li>
            <li>
              - Het ontwikkelen van een robuuste backend-service voor het exporteren van
              geformatteerde Excel-bestanden.
            </li>
            <li>
              - Het naadloos integreren van de code via wekelijkse PR's en code reviews in Git.
            </li>
          </ul>
</p>
          <h3>Resultaat & Leermomenten</h3>
          <p>
            Aan het einde van de stage stond er een snelle, dynamische tool waarmee
            klanten autonoom hun rapportages kunnen genereren. Dit bespaart FourIQ
            aanzienlijk veel tijd en elimineert menselijke fouten.
          </p>
          <p>
            Tijdens dit project heb ik enorm veel geleerd over het werken in een professionele
            Ruby on Rails stack, het schrijven van efficiënte asynchrone UI-componenten en
            het belang van een gedegen architectuur binnen een professioneel team.
          </p>

          <div className="download-section">
            <h3>Bewijsstukken</h3>
            <div className="download-grid">
              <a href="#" className="download-btn" aria-label="Download Plan van Aanpak">
                Plan van Aanpak
              </a>
              <a href="#" className="download-btn" aria-label="Download Realisatiedocument">
                Realisatiedocument
              </a>
              <a href="#" className="download-btn" aria-label="Download Reflectiedocument">
                Reflectiedocument
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Stage;
