import React, { useContext } from "react";
import styled from "styled-components";
import ActorsContainer from "./ActorsContainer";
import PlayerActor from "./ActorTokens/PlayerActor";
import EnemyActor from "./ActorTokens/EnemyActor";
import WallActor from "./ActorTokens/WallActor";

import { theme } from "styled-tools";
import { baseUnit } from "./constants";

function Actors() {
  const {
    actors: { player, ais, walls, mapSize }
  } = useContext(ActorsContainer.Context);

  return (
    <Wrapper size={mapSize}>
      <PlayerActor y={player.y} x={player.x} />

      {walls.map(wall => (
        <WallActor x={wall.x} y={wall.y} />
      ))}

      {ais.map(ai => (
        <EnemyActor x={ai.x} y={ai.y} direction={ai.direction} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${props => baseUnit * props.size}px;
  height: ${props => baseUnit * props.size}px;
  background-color: ${theme("bg")};
  position: relative;
`;

export default Actors;
