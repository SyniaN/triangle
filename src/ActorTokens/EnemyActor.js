import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

import BasicActor from "./BasicActor";
import Icon from "../FontIcons";

const EnemyActor = ({ x, y, direction }) => {
  const iconName = (() => {
    switch (direction) {
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
    <Background y={y} x={x}>
      <Icon name={iconName} color="theme.ai.arrow" />
    </Background>
  );
};

const Background = styled(BasicActor)`
  background-color: ${theme("ai.background")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default EnemyActor;
