import styled from "styled-components";

import { baseUnit } from "../constants";

const BasicActor = styled.div`
  width: ${baseUnit}px;
  height: ${baseUnit}px;
  position: absolute;
  top: ${prop => prop.y * baseUnit}px;
  left: ${prop => prop.x * baseUnit}px;
`;

export default BasicActor;
