import React from "react";
import styled from "styled-components";

import Icon from "../FontIcons";
import BasicActor from "./BasicActor";

const FinishActor = prop => (
  <Background {...prop}>
    <Icon name="flag-checkered" size="36px" />
  </Background>
);

export default FinishActor;

const Background = styled(BasicActor)`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
