import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Game from "./views/Game";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/art" element={<Art />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default AppRoutes;