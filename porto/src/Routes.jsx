import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Game from "./views/Game"; // Make sure this is correctly cased

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<Art />} />
        <Route path="/game" element={<Game />} /> {/* Make sure this matches */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;