// this is the player component in the same directory as the playersList component
import Player from "./Player";
// this is the player.js object array document
import players from "../Players";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container className="mt-4">
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;

// Without destructuring, we would pass each prop one by one:

// jsx
// Copy
// Edit
// <Player
//   name={player.name}
//   team={player.team}
//   nationality={player.nationality}
//   jerseyNumber={player.jerseyNumber}
//   age={player.age}
//   imageUrl={player.imageUrl}
