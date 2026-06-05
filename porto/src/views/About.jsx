import React, { useState } from "react";
// import Tabs from "../component/Tab";
import NavBar from "../component/Nav";
import CVDownload from "../component/CVDownload"; // Belangrijk: nu correct geïmporteerd!
import Footer from "../component/Footer";
import "./css/Home.css"; // We hergebruiken de Bento-grid stijlen van Home
import "../tailwind.css";

const About = () => {
    // State for dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <div className="home-container" style={{ paddingTop: "2rem" }}>
                <div className="bento-grid">
                    
                    {/* Wie ben ik? Tile */}
                    <div className="bento-card hero-card" style={{ gridColumn: "1 / -1", textAlign: "center" }}>
                        <h1 className="bento-title">Over Mij</h1>
                        <p>
                            Welkom! Ik ben Tom Gijsbers. In dit portfolio laat ik natuurlijk zien wat ik technisch in huis heb, maar software ontwikkelen is voor mij meer dan alleen code schrijven. Het draait om probleemoplossend denken en de unieke achtergrond die je meeneemt naar de tekentafel.
                        </p>
                        <h3>Van Precisiewerk naar Logica</h3>
                        <p>
                            Mijn achtergrond ligt niet standaard in de IT, maar in de metaalindustrie als lasser en robotprogrammeur. Daar heb ik geleerd wat absolute precisie en focus inhouden. Deze hands-on ervaring met complexe, fysieke systemen heeft me een oersterke, probleemoplossende instelling gegeven. Waar ik vroeger fysieke constructies ontwierp en lasnaden perfectioneerde, bouw ik nu robuuste, logische software-architecturen. De logische vertaalslag van metaal naar code is voor mij een heel natuurlijk proces gebleken.
                        </p>
                        <h3>Soft Skills & Samenwerking</h3>
                        <p>
In een professioneel development team is communicatie net zo belangrijk als de techniek. Dankzij mijn eerdere werkervaring weet ik hoe ik gestructureerd moet samenwerken en abstracte wensen kan vertalen naar concrete oplossingen. Ik communiceer helder en nuchter, sta altijd open voor opbouwende kritiek tijdens code reviews, en pas me snel aan binnen nieuwe projecten. Mijn analytische blik helpt me om goed door te vragen; ik neem geen genoegen met een snelle 'fix', maar wil de kern van een probleem echt doorgronden.
                        </p>
                        <h3>Interesses & Visie</h3>
                        <p>
                            Naast mijn passie voor IT heb ik een brede interesse in cultuur, kunst en filosofie. Dit helpt me om vraagstukken vanuit meerdere perspectieven te benaderen, in plaats van alleen vanuit de techniek. Ook haal ik veel energie uit gaming; een hobby die perfect aansluit bij mijn liefde voor systematiek, logica en het oplossen van complexe puzzels.

                        </p>
                    </div>

            
                        <div id="contact" style={{ gridColumn: "1 / -1", textAlign: "center" }}>
                            <CVDownload darkMode={darkMode} />
                        </div>
           

                    {/* <Tabs /> */}
                </div>
            </div>
          </div>
    
    );
};

export default About;
