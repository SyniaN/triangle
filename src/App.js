import React from "react";
import Actors from "./Actors";
import Theme from "./Theme";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Theme>
        <Actors />
      </Theme>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
