import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../views/css/ArtGallery.css";
import art1 from "../assets/art/art1.jpg";
import art2 from "../assets/art/art2.jpg";
import art3 from "../assets/art/art3.jpg";
import art4 from "../assets/art/art4.jpg";
import art5 from "../assets/art/art5.jpg";
import art6 from "../assets/art/art6.jpg";

// 🔹 Object array met kunstwerken
const artworks = [
  {
    image: art1,
    title: "De Brug en de Boot",
    artist: "Paul Signac",
  },
  {
    image: art2,
    title: "Slaapkamer in Arles",
    artist: "Vincent van Gogh",
  },
  {
    image: art3,
    title: "Amandelbloesem",
    artist: "Vincent van Gogh",
  },
  {
    image: art4,
    title: "Korenveld met Kraaien",
    artist: "Vincent van Gogh",
  },
  {
    image: art5,
    title: "De Prediking van Christus",
    artist: "Rembrandt van Rijn",
  },
  {
    image: art6,
    title: "Het Straatje",
    artist: "Johannes Vermeer",
  },
];

const ArtGallery = () => {
  return (
    <Container className="gallery-container">
      <h3 className="gallery-title">Mijn Kunstwerken</h3>
      <p>Ik ga graag naar musea om wat mooie schilderijen te checken. Hier een paar die ik tof vond en heb vastgelegd.</p>

      <Row>
        {artworks.map((art, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="gallery-item">
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={art.image} 
                alt={art.title} 
                className="gallery-img" 
              />
              <Card.Body>
                <Card.Title>{art.title}</Card.Title>
                <Card.Text><strong>{art.artist}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtGallery;
