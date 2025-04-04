import React from "react";

const CVDownload = () => {
  return (
    <div style={{
      padding: "60px 20px", 
      textAlign: "center",
      margin: "60px 0",
      background: "#f8fafc",
      borderRadius: "16px"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Laten we samenwerken</h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
        Download mijn CV voor een volledig overzicht van mijn vaardigheden, ervaring en opleiding, of neem direct contact op.
      </p>
      
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <a 
          href="/path-to-your-cv.pdf" 
          style={{
            padding: "10px 20px",
            background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
          download="TomGijsbers_CV.pdf"
        >
          CV Downloaden
        </a>
        
        <a 
          href="mailto:your-email@example.com"
          style={{
            padding: "10px 20px",
            background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Contact Opnemen
        </a>
      </div>
    </div>
  );
};

export default CVDownload;