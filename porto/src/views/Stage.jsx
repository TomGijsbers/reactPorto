import React, { useState } from "react";
import NavBar from "../component/Nav";
import "./css/Stage.css";

const Stage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState({ open: false, fileKey: "", label: "" });
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input, file: modal.fileKey }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Er ging iets mis.");
        setInput("");
        setLoading(false);
        return;
      }

      const fileRes = await fetch(data.url);
      const blob = await fileRes.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = modal.label + ".pdf";
      a.click();
      URL.revokeObjectURL(blobUrl);

      closeModal();
    } catch {
      setError("Netwerkfout. Probeer opnieuw.");
    }

    setLoading(false);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Password Modal */}
      {modal.open && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 id="modal-title">🔒 Beveiligd document</h3>
            <p>
              Voer het wachtwoord in om <strong>{modal.label}</strong> te downloaden.
            </p>
            <form onSubmit={handleDownload}>

              {/* Input + oog-knop wrapper */}
              <div className="modal-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="modal-input"
                  placeholder="Wachtwoord"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Verberg wachtwoord" : "Toon wachtwoord"}
                >
                  {showPassword ? (
                    // Oog dicht (doorgestreept)
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    // Oog open
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
                <button type="submit" className="download-btn" disabled={loading}>
                  {loading ? "Bezig..." : "Downloaden"}
                </button>
                <button type="button" className="modal-cancel" onClick={closeModal}>
                  Annuleren
                </button>
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
              <h3>De Context</h3>
              <p>
                Tijdens mijn stage werkte ik als software developer bij FourIQ, een bedrijf
                gespecialiseerd in het meten en monitoren van gebouwinstallaties. De huidige
                applicatie draait op een Ruby on Rails backend, gehost via Docker en Kubernetes.
                Hoewel het platform perfect inzoomt op losse gebouwen, ontbrak er een centraal
                managementoverzicht over de hele vastgoedportefeuille. Klanten kregen hun
                rapportages via een tijdrovend en foutgevoelig handmatig Excel-proces.
              </p>
            </div>

            <div className="content-block">
              <h3>Mijn Rol & Architectuur</h3>
              <p>
                Mijn hoofdtaak was het ontwerpen en ontwikkelen van een schaalbare, geautomatiseerde
                rapportagetool. Na een uitgebreide analyse van de bestaande codebase ben ik afgestapt
                van standaard synchrone weergaves en heb ik de focus gelegd op performance en stabiliteit.
                Mijn belangrijkste technische realisaties waren:
              </p>
              <ul className="custom-list">
                <li>
                  <strong>Backend Refactoring:</strong> Migratie van een "Fat Controller" naar modulaire{" "}
                  <i>Service Objects</i> en een DTO-patroon (Single Source of Truth).
                </li>
                <li>
                  <strong>Performance Optimalisatie:</strong> Het oplossen van complexe N+1 query problemen
                  door middel van geavanceerde <i>Eager Loading</i> en het reduceren van Garbage Collection
                  responstijden met 25%.
                </li>
                <li>
                  <strong>Asynchrone Frontend:</strong> Ontwikkeling van een interactieve UI via{" "}
                  <i>StimulusJS</i> en de Fetch API. Introductie van Lazy Loading per tabelrij met
                  resource-protectie via een native <code>AbortController</code>.
                </li>
                <li>
                  <strong>Context-Aware Export:</strong> Het bouwen van een "Smart Export" naar Excel,
                  waarbij actieve client-side filters via JSON-payloads asynchroon worden verwerkt.
                </li>
              </ul>
            </div>

            <div className="content-block">
              <h3>Resultaat & Leermomenten</h3>
              <p>
                Aan het einde van de stage stond er een snelle, dynamische tool (met een
                Time-To-First-Byte van &lt; 0.5s) waarmee klanten autonoom en foutloos hun
                rapportages kunnen genereren en exporteren.
              </p>
              <p>
                Tijdens dit project heb ik enorm veel geleerd. Niet alleen over het werken in een
                professionele Ruby on Rails stack, maar vooral over software-architectuur. Ik heb in
                de praktijk ervaren wat de impact is van de <i>Global Interpreter Lock (GIL)</i> bij
                multithreading, hoe je een database Connection Pool beschermt, en hoe essentieel Code
                Reviews en DRY-principes zijn in een professioneel team.
              </p>
            </div>
          </div>

          <div className="download-section">
            <h3>Documentatie & Bewijsstukken</h3>
            <div className="download-grid">
              <button
                onClick={() => openModal("pva", "Plan van Aanpak")}
                className="download-btn"
                aria-label="Download Plan van Aanpak"
              >
                <span className="icon">📄</span> Plan van Aanpak
              </button>
              <button
                onClick={() => openModal("realisatie", "Realisatiedocument")}
                className="download-btn"
                aria-label="Download Realisatiedocument"
              >
                <span className="icon">🏗️</span> Realisatiedocument
              </button>
              <button
                onClick={() => openModal("reflectie", "Reflectiedocument")}
                className="download-btn"
                aria-label="Download Reflectiedocument"
              >
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