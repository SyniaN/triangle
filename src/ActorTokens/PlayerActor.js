import styled from "styled-components";
import { theme } from "styled-tools";

import BasicActor from "./BasicActor";

const PlayerActor = styled(BasicActor)`
  background-color: ${theme("player.background")};
`;

export default PlayerActor;
