import React, { useContext } from "react";
import cvPDF from "../assets/CV-TomGijsbers2.pdf"; // Import the PDF
import "./CVDownload.css"; // We'll create this CSS file

const CVDownload = ({ darkMode }) => {
  return (
    <div className={`cv-section ${darkMode ? "cv-section-dark" : ""}`}>
      <h2 className="cv-title">Laten we samenwerken</h2>
      <p className="cv-description">
        Download mijn CV voor een volledig overzicht van mijn vaardigheden, ervaring en opleiding, of neem direct contact op.
      </p>
      
      <div className="cv-buttons">
        <a 
          href={cvPDF} 
          className="cv-button"
          download="TomGijsbers_CV.pdf"
        >
          CV Downloaden
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