import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Tom Gijsbers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Over Mij</Nav.Link>
            <Nav.Link as={Link} to="/art">Kunst</Nav.Link>
            {/* <NavDropdown title="Hobby" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/school">School</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/werk">Werk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/art">Kunst</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
