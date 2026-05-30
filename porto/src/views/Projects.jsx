import React, { useState } from "react";
import NavBar from "../component/Nav";
import Footer from "../component/Footer";
import "./css/Home.css";
import "../tailwind.css";

const PROJECTS_DATA = [
  {
    id: "ai_vision",
    title: "Neural Networks & Computer Vision",
    phase: "Fase 4",
    summary: "Ontwikkeling en optimalisatie van neurale netwerken middels Transfer Learning.",
    description: "Voor dit project heb ik gewerkt aan image classification met behulp van TensorFlow en Keras (CIFAR-10 dataset). De focus lag op 'Transfer Learning': het inladen van pre-trained modellen (zoals ResNet50V2), het (un)freezen van layers, en het toevoegen en trainen van een eigen output 'head'.",
    leermoment: "Dit gaf me praktisch inzicht in de architectuur van neurale netwerken. Het inladen, finetunen en evalueren (via confusion matrices en loss curves) leerde me dat data preprocessing vaak bepalend is voor de nauwkeurigheid van het model.",
    evidenceLabel: "🧑‍💻 Bekijk Code",
    evidenceLink: "/documents/DeepLearning_CodeNotes_Tom.pdf",
    image: "/images/placeholder-ai.jpg"
  },
  {
    id: "wilvo",
    title: "Procesanalyse Wilvo Group",
    phase: "Fase 3",
    summary: "BPMN-modellering en optimalisatie van een fysiek productieproces.",
    description: "Het productieproces van Wilvo Group is volledig in kaart gebracht en geanalyseerd. Door middel van BPMN-modellen zijn bottlenecks geïdentificeerd en zijn er gerichte optimalisaties voorgesteld om de efficiëntie in de fabriek te verhogen.",
    leermoment: "Ik heb hier ervaren hoe cruciaal een nauwkeurige procesmodellering is. Voordat je überhaupt software kunt schrijven, moet je de fysieke realiteit en bedrijfslogica voor de volle 100% begrijpen.",
    evidenceLabel: "📄 Bekijk BPMN Schema",
    evidenceLink: "/documents/PE BPMN Assignment- Tom Gijsbers.pdf",
    image: "/images/placeholder-wilvo.png"
  },
  {
    id: "wezeldrivers",
    title: "Wezeldrivers (Laravel)",
    phase: "Fase 2",
    summary: "Webapplicatie voor fietsclubbeheer en communicatie.",
    description: "Een webapplicatie ontwikkeld voor evenementenplanning, ledenregistratie, communicatie en een bestelmodule. Binnen dit Agile (Jira) project had ik de rol van Document Lead, waarbij ik verantwoordelijk was voor het klantcontact en de technische documentatie (UML, user stories).",
    leermoment: "Mijn grootste inzicht was het stroomlijnen van klantcommunicatie en het succesvol vertalen van abstracte wensen naar concrete UML-diagrammen en user stories voor het development team.",
    evidenceLabel: "📊 Bekijk UML Schema",
    evidenceLink: "/documents/StarUML_Wezeldrivers_Tom.pdf",
    image: "/images/placeholder-wezeldrivers.png"
  },
  {
    id: "iot",
    title: "IoT Milieu Monitoring",
    phase: "Fase 3",
    summary: "Hardware-software integratie met Python, MQTT en Raspberry Pi.",
    description: "Een compleet IoT-systeem ontworpen dat temperatuur, luchtdruk en licht meet. De verzamelde data wordt via het MQTT-protocol real-time verzonden naar een lokale Mosquitto-broker en weergegeven in een dashboard, inclusief een geautomatiseerde PWM-feedbacklus.",
    leermoment: "Dit project leerde me hoe hardware en software naadloos in real-time kunnen communiceren. Het werken met asynchrone datastromen via MQTT heeft mijn inzicht in netwerkprotocollen enorm vergroot.",
    evidenceLabel: "⚙️ Bekijk Architectuur & Scripts",
    evidenceLink: "/documents/IoT_Architectuur_Tom.pdf",
    image: "/images/placeholder-iot.png"
  }
];

const Projects = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgError, setImgError] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const openModal = (project) => {
    setSelectedProject(project);
    setImgError(false);
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Modal / Pop-up */}
      {selectedProject && (
        <div
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",         // ruimte op kleine schermen
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffff",
              maxWidth: "900px",
              width: "95%",
              maxHeight: "95vh",
              overflowY: "auto",
              borderRadius: "12px",
              padding: "2rem",
              position: "relative",        // ← dit stond er al goed in
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Sluitknop ABSOLUUT rechtsboven, niet float */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",      // ← was sticky+float, nu absolute
                top: "1rem",
                right: "1rem",
                fontSize: "1.5rem",
                lineHeight: 1,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#64748b",
                zIndex: 10,
              }}
            >
              &times;
            </button>

            {/* Afbeelding */}
            <div style={{ marginBottom: "1.5rem" }}>
              {!imgError ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: "100%",
                    maxHeight: "45vh",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                    display: "block",
                  }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  style={{
                    minHeight: "200px",
                    backgroundColor: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ color: "#64748b", fontWeight: "bold" }}>
                    [Screenshot van {selectedProject.title}]
                  </span>
                </div>
              )}
            </div>

            <h2 style={{ marginTop: "0", marginBottom: "0.2rem" }}>
              {selectedProject.title}
            </h2>
            <span
              className="status-badge"
              style={{ display: "inline-block", marginBottom: "1rem" }}
            >
              <span className="status-dot"></span> {selectedProject.phase}
            </span>

            <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
              {selectedProject.description}
            </p>

            <div
              style={{
                backgroundColor: "#f8fafc",
                padding: "1rem",
                borderRadius: "8px",
                borderLeft: "4px solid #4f46e5",
                marginBottom: "1.5rem",
              }}
            >
              <h4 style={{ margin: "0 0 0.5rem 0", color: "#1e293b" }}>
                💡 Mijn Leermoment
              </h4>
              <p style={{ margin: "0", fontSize: "0.95rem", color: "#334155" }}>
                {selectedProject.leermoment}
              </p>
            </div>

            <a
              href={selectedProject.evidenceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-btn primary"
              style={{ width: "100%", textAlign: "center", display: "block" }}
            >
              {selectedProject.evidenceLabel}
            </a>
          </div>
        </div>
      )}

      <div className="home-container" style={{ paddingTop: "2rem" }}>
        <div
          className="bento-card hero-card"
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <h1 className="bento-title">Mijn Projecten & Ontwikkeling</h1>
          <p className="bento-text">
            Een overzicht van de belangrijkste projecten tijdens mijn opleiding.
            Klik op een project om de details, mijn persoonlijke leermomenten en
            de bijbehorende bewijsstukken te bekijken.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="bento-card action-card"
              style={{
                cursor: "pointer",
                transition: "transform 0.2s",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => openModal(project)}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#6366f1",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {project.phase}
              </span>
              <h3 style={{ marginTop: "0.5rem" }}>{project.title}</h3>
              <p style={{ flexGrow: 1 }}>{project.summary}</p>
              <span
                className="bento-btn secondary"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                }}
              >
                Lees meer &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;