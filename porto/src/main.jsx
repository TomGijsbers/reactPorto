import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Home from "./views/Home";  // Zorg dat deze bestaat
// import About from "./views/About";  // Nieuwe pagina toevoegen
import "bootstrap/dist/css/bootstrap.min.css";
// import Art from "./views/Art";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
