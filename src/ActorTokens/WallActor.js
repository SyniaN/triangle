import styled from "styled-components";
import { theme } from "styled-tools";

import BasicActor from "./BasicActor";

const WallActor = styled(BasicActor)`
  background-color: ${theme("wall.background")};
`;

export default WallActor;
