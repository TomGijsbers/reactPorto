import React, { useState } from "react";
import NavBar from "../component/Nav";
import "./css/Stage.css";

// Wachtwoord direct hier — simpel en het werkt gewoon
const PASSWORD = "ThomasMore";

const Stage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState({ open: false, fileKey: "", label: "" });
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const FILES = {
    pva: "/documents/PVA_TomGijsbers.pdf",
    realisatie: "/documents/Realisatiedocument_TomGijsbers.pdf",
    reflectie: "/documents/ReflectieDocument_TomGijsbers.pdf",
  };

  const openModal = (fileKey, label) => {
    setModal({ open: true, fileKey, label });
    setInput("");
    setError("");
    setShowPassword(false);
  };

  const closeModal = () => {
    setModal({ open: false, fileKey: "", label: "" });
    setInput("");
    setError("");
    setShowPassword(false);
  };

  const handleOpenDocument = (e) => {
    e.preventDefault();
    if (input !== PASSWORD) {
      setError("Ongeldig wachtwoord.");
      setInput("");
      return;
    }
    
    // Open in nieuw tabblad in plaats van direct downloaden
    window.open(FILES[modal.fileKey], "_blank");
    closeModal();
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {modal.open && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 id="modal-title">🔒 Beveiligd document</h3>
            <p>Voer het wachtwoord in om {modal.label} te openen.</p>
            <form onSubmit={handleOpenDocument}>
              <div className="modal-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="modal-input"
                  placeholder="Wachtwoord"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Verberg wachtwoord" : "Toon wachtwoord"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {error && <p className="modal-error" role="alert">{error}</p>}
              <div className="modal-actions">
                <button type="submit" className="download-btn">Openen</button>
                <button type="button" className="modal-cancel" onClick={closeModal}>Annuleren</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="stage-container">
        <section className="stage-card">
          <header className="stage-header">
            <h1>Management Rapportage Tool</h1>
            <h2 className="company-name">FourIQ</h2>
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
              <p>
                Tijdens mijn afstudeerstage bij FourIQ werkte ik als software developer aan een platform dat gebouwinstallaties meet en monitort. De applicatie draait op een Ruby on Rails backend, gehost via Docker en Kubernetes. Hoewel het platform perfect inzoomt op losse gebouwen, ontbrak er een centraal managementoverzicht over de hele vastgoedportefeuille. Klanten kregen hun rapportages via een tijdrovend en foutgevoelig handmatig Excel-proces.
              </p>
            </div>

            <div className="content-block">
              <p>
                Doel van de stage was het ontwerpen en ontwikkelen van een schaalbare, geautomatiseerde rapportagetool. Na een uitgebreide analyse ben ik afgestapt van standaard synchrone weergaves en heb ik de focus gelegd op performance en stabiliteit. Mijn belangrijkste technische realisaties waren:
              </p>
              <ul className="custom-list">
                <li>
                  Backend Refactoring: Migratie van een "Fat Controller" naar modulaire Service Objects en een DTO-patroon (Single Source of Truth).
                </li>
                <li>
                  Performance Optimalisatie: Het oplossen van complexe N+1 query problemen door middel van geavanceerde Eager Loading en het reduceren van responstijden met 25%.
                </li>
                <li>
                  Asynchrone Frontend: Ontwikkeling van een interactieve UI via StimulusJS en de Fetch API. Introductie van Lazy Loading per tabelrij met resource-protectie via een native AbortController.
                </li>
                <li>
                  Context-Aware Export: Het bouwen van een "Smart Export" naar Excel, waarbij actieve client-side filters via JSON-payloads asynchroon worden verwerkt.
                </li>
              </ul>
            </div>

            <div className="content-block">
              <p>
                Aan het einde van de stage stond er een snelle, dynamische tool waarmee klanten autonoom en foutloos hun rapportages kunnen genereren en exporteren.
              </p>
            </div>
          </div>

          <div className="download-section">
            <div className="download-grid">
              <button onClick={() => openModal("pva", "Plan van Aanpak")} className="download-btn">
                <span className="icon">📄</span> Plan van Aanpak
              </button>
              <button onClick={() => openModal("realisatie", "Realisatiedocument")} className="download-btn">
                <span className="icon">🏗️</span> Realisatiedocument
              </button>
              <button onClick={() => openModal("reflectie", "Reflectiedocument")} className="download-btn">
                <span className="icon">💡</span> Reflectiedocument
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stage;