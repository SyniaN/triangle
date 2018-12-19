import { useReducer } from "react";
import createContainer from "constate";

const initialState = {
  player: {
    init_x: 0,
    init_y: 0,
    x: 0,
    y: 0
  },
  ais: [
    {
      init_x: 40,
      init_y: 40,
      x: 40,
      y: 40,
      direction: "DOWN"
    },
    {
      init_x: 120,
      init_y: 20,
      x: 120,
      y: 20,
      direction: "UP"
    },
    {
      init_x: 60,
      init_y: 140,
      x: 60,
      y: 140,
      direction: "RIGHT"
    }
  ]
};

function moveAi(ai) {
  switch (ai.direction) {
    case "DOWN":
      return {
        ...ai,
        y: ai.y + 20,
        direction: ai.y - ai.init_y < 60 && ai.y < 180 ? "DOWN" : "UP"
      };

    case "UP":
      return {
        ...ai,
        y: ai.y - 20,
        direction: ai.init_y - ai.y < 60 && ai.y > 20 ? "UP" : "DOWN"
      };
    case "LEFT":
      return {
        ...ai,
        x: ai.x - 20,
        direction: ai.init_x - ai.x < 60 && ai.x > 20 ? "LEFT" : "RIGHT"
      };
    case "RIGHT":
      return {
        ...ai,
        x: ai.x + 20,
        direction: ai.x - ai.init_x < 60 && ai.x < 180 ? "RIGHT" : "LEFT"
      };
    default:
      return ai;
  }
}

function reducer(state, action) {
  let returnObj = {};
  switch (action.type) {
    case "MOVE_LEFT":
      returnObj = {
        player: {
          ...state.player,
          x: state.player.x > 0 ? state.player.x - 20 : 0
        },
        ais: state.ais.map(ai => moveAi(ai))
      };
      break;
    case "MOVE_RIGHT":
      returnObj = {
        player: {
          ...state.player,
          x: state.player.x < 180 ? state.player.x + 20 : 180
        },
        ais: state.ais.map(ai => moveAi(ai))
      };
      break;
    case "MOVE_UP":
      returnObj = {
        player: {
          ...state.player,
          y: state.player.y > 0 ? state.player.y - 20 : 0
        },
        ais: state.ais.map(ai => moveAi(ai))
      };
      break;
    case "MOVE_DOWN":
      returnObj = {
        player: {
          ...state.player,
          y: state.player.y < 180 ? state.player.y + 20 : 180
        },
        ais: state.ais.map(ai => moveAi(ai))
      };
      break;
    default:
      returnObj = state;
  }

  return returnObj;
}

function useActors() {
  const [actors, dispatch] = useReducer(reducer, initialState);
  const moveLeft = () => dispatch({ type: "MOVE_LEFT" });
  const moveRight = () => dispatch({ type: "MOVE_RIGHT" });
  const moveUp = () => dispatch({ type: "MOVE_UP" });
  const moveDown = () => dispatch({ type: "MOVE_DOWN" });
  return { actors, moveLeft, moveRight, moveUp, moveDown };
}

const ActorsContainer = createContainer(useActors);

export default ActorsContainer;
