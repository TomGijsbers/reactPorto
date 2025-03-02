import React, { useState, useEffect } from 'react';
import "../views/css/ThemeToggle.css";

const ThemeToggle = () => {
  // 🔹 State voor het bijhouden van het thema
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🔹 Check of er een voorkeur in localStorage staat
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // 🔹 Schakelen tussen thema's
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <span className="theme-label">{isDarkMode ? '🌙 Dark Mode' : '🔆 Light Mode'}</span>
    </div>
  );
};

export default ThemeToggle;

