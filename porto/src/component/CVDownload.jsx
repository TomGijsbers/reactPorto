import React, { useContext } from "react";
import "./CVDownload.css"; // We'll create this CSS file

const cvPDF = "/documents/CV-TomGijsbers-1.pdf";

const CVDownload = ({ darkMode }) => {
  return (
    <div className={`cv-section ${darkMode ? "cv-section-dark" : ""}`}>
      <h2 className="cv-title">Laten we samenwerken</h2>
      <p className="cv-description">
        Bekijk mijn CV voor een volledig overzicht van mijn vaardigheden, ervaring en opleiding, of neem direct contact op.
      </p>

      <div className="cv-buttons">
        <a
          href={cvPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
          onClick={() => {
            if (window.gtag) {
              window.gtag('event', 'view_cv', {
                event_category: 'CV',
                event_label: 'CV View Button',
                value: 1
              });
            }
          }}
        >
          CV Bekijken
        </a>

        <a
          href="mailto:tom.gijsbers@outlook.com"
          className="cv-button"
        >
          Contact Opnemen
        </a>
      </div>
    </div>
  );
};

export default CVDownload;