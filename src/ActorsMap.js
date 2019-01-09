import React, { useContext } from "react";
import styled from "styled-components";
import ActorsContainer from "./ActorsContainer";
import { prop, theme } from "styled-tools";
import Icon from "./FontIcons";
import { baseUnit, horizontalGridCount, verticalGridCount } from "./constants";

function ActorsMap() {
  const {
    actors: { player, ais, walls }
  } = useContext(ActorsContainer.Context);

  return (
    <Wrapper>
      {walls.map(wall => (
        <Walls x={wall.x} y={wall.y} />
      ))}
      <Player y={player.y} x={player.x} />
      {ais.map(ai => {
        const IconName = (() => {
          switch (ai.direction) {
            case "UP":
              return "arrow-up";
            case "DOWN":
              return "arrow-down";
            case "LEFT":
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
  width: ${baseUnit * horizontalGridCount}px;
  height: ${baseUnit * verticalGridCount}px;
  background-color: ${theme("bg")};
  position: relative;
`;

const Actor = styled.div`
  width: ${baseUnit}px;
  height: ${baseUnit}px;
  position: absolute;
  top: ${prop("y") * baseUnit}px;
  left: ${prop("x") * baseUnit}px;
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
