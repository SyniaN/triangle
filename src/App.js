import React, { useContext } from "react";
import ActorsContainer from "./ActorsContainer";
import ActorsMap from "./ActorsMap";
import Theme from "./Theme";
import styled from "styled-components";

function App() {
  const { moveLeft, moveRight, moveUp, moveDown } = useContext(
    ActorsContainer.Context
  );

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
    <Wrapper tabIndex="0" onKeyPress={keyDown}>
      <Theme>
        <ActorsMap />
      </Theme>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  border: none;
  outline: none;
`;
