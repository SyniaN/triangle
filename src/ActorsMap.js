import React, { useContext } from "react";
import styled from "styled-components";
import ActorsContainer from "./ActorsContainer";
import { theme } from "styled-tools";
import Icon from "./FontIcons";
import { baseUnit } from "./constants";

function ActorsMap() {
  const {
    actors: { player, ais, walls, mapSize }
  } = useContext(ActorsContainer.Context);

  return (
    <Wrapper size={mapSize}>
      {walls.map(wall => (
        <Walls x={wall.x} y={wall.y} />
      ))}
      <Player y={player.y} x={player.x} />
      {ais.map(ai => {
        const IconName = (() => {
          switch (ai.direction) {
            case "MOVE_UP":
              return "arrow-up";
            case "MOVE_DOWN":
              return "arrow-down";
            case "MOVE_LEFT":
              return "arrow-left";
            default:
              return "arrow-right";
          }
        })();
        return (
          <Ai key={`${ai.x}_${ai.y}`} y={ai.y} x={ai.x}>
            <Icon name={IconName} color="theme.ai.arrow" />
          </Ai>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${props => baseUnit * props.size}px;
  height: ${props => baseUnit * props.size}px;
  background-color: ${theme("bg")};
  position: relative;
`;

const Actor = styled.div`
  width: ${baseUnit}px;
  height: ${baseUnit}px;
  position: absolute;
  top: ${prop => prop.y * baseUnit}px;
  left: ${prop => prop.x * baseUnit}px;
`;

const Player = styled(Actor)`
  background-color: ${theme("player.background")};
`;

const Ai = styled(Actor)`
  background-color: ${theme("ai.background")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Walls = styled(Actor)`
  background-color: ${theme("wall.background")};
`;

export default ActorsMap;
