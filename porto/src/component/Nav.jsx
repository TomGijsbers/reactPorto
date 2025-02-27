import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/art">Art</Nav.Link>
        </Nav>

        {/* 🔹 Toggle voor Dark/Light Mode rechts in de navbar */}
        <ThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;