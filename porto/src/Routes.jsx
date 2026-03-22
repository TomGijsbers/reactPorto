import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Game from "./views/Game";
import Stage from "./views/Stage";
import Projects from "./views/Projects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/art" element={<Art />} />
      <Route path="/game" element={<Game />} />
      <Route path="/stage" element={<Stage />} />
    </Routes>
  );
};

export default AppRoutes;