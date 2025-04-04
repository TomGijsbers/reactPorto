import React from "react";

const SchoolProjects = () => {
  return (
    <div style={{ padding: "40px 0", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Schoolprojecten</h2>
      <p>Hier komt een overzicht van mijn schoolprojecten.</p>
      
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {["FloraFocus", "Wezeldrivers", "Procesanalyse"].map((project, index) => (
          <div key={index} style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            width: "300px"
          }}>
            <h3>{project}</h3>
            <p>Projectbeschrijving komt hier.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolProjects;