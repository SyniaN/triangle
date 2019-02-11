import React, { useContext } from "react";
import styled from "styled-components";
import ActorsContainer from "./ActorsContainer";
import PlayerActor from "./ActorTokens/PlayerActor";
import EnemyActor from "./ActorTokens/EnemyActor";
import WallActor from "./ActorTokens/WallActor";
import FinishActor from "./ActorTokens/FinishActor";

import { theme } from "styled-tools";
import { baseUnit } from "./constants";

function Actors() {
  const {
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    actors: { finish, player, ais, walls, mapSize }
  } = useContext(ActorsContainer.Context);

  const keyDown = evt => {
    switch (evt.key) {
      case "w":
        moveUp();
        break;
      case "a":
        moveLeft();
        break;
      case "s":
        moveDown();
        break;
      case "d":
        moveRight();
        break;
      case " ":
      default:
        return;
    }
  };

  return (
    <Wrapper size={mapSize} tabIndex="0" onKeyPress={keyDown}>
      {walls.map(wall => (
        <WallActor x={wall.x} y={wall.y} />
      ))}

      {ais.map(ai => (
        <EnemyActor x={ai.x} y={ai.y} direction={ai.direction} />
      ))}

      <PlayerActor y={player.y} x={player.x} />

      <FinishActor x={finish.x} y={finish.y} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: none;
  outline: none;
  width: ${props => baseUnit * props.size}px;
  height: ${props => baseUnit * props.size}px;
  background-color: ${theme("bg")};
  position: relative;
`;

export default Actors;
