import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{
          height: "350px",
          objectFit: "cover",
          objectPosition: "center",
        }} // Fixed height and cropping
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150",
};

// PropTypes Validation
Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Player;
