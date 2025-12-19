import React, { useState } from "react";
import Tabs from "../component/Tab"; 
import NavBar from "../component/Nav";
import Footer from "../component/Footer";
import "./css/Home.css"; // Import Home.css for the background styles


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
                <div style={{ textAlign: "center" }}>
                    <Tabs />
                </div>
            </div>
        </div>
    );
};

export default About;
