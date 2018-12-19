import React, { useContext } from "react";
import styled from "styled-components";
import ActorsContainer from "./ActorsContainer";
import { prop, theme } from "styled-tools";
import Icon from "./FontIcons";

function ActorsMap() {
  const {
    actors: { player, ais }
  } = useContext(ActorsContainer.Context);

  return (
    <Wrapper>
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
  width: 200px;
  height: 200px;
  background-color: ${theme("bg")};
  position: relative;
`;

const Actor = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: ${prop("y")}px;
  left: ${prop("x")}px;
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

export default ActorsMap;
