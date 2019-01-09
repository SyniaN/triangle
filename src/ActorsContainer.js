import { useReducer } from "react";
import createContainer from "constate";
import { initialState } from "./initialState";

function movePlayer(actionType, player) {
  switch (actionType) {
    case "MOVE_LEFT":
      return {
        ...player,
        x: player.x > 0 ? player.x - 1 : 0
      };
    case "MOVE_RIGHT":
      return {
        ...player,
        x: player.x < 10 ? player.x + 1 : 10
      };
    case "MOVE_UP":
      return {
        ...player,
        y: player.y > 0 ? player.y - 1 : 0
      };
    case "MOVE_DOWN":
      return {
        ...player,
        y: player.y < 10 ? player.y + 1 : 10
      };
    default:
      return player;
  }
}

function reverseDirection(direction) {
  if (direction === "UP") return "DOWN";
  if (direction === "DOWN") return "UP";
  if (direction === "RIGHT") return "LEFT";
  if (direction === "LEFT") return "RIGHT";
}

function moveAi(ai) {
  const withinRange =
    Math.abs(ai.y - ai.init_y) < 6 && Math.abs(ai.x - ai.init_x) < 6;
  const withinBound = ai.y < 10 && ai.y > 0 && ai.x < 10 && ai.x > 0;

  if ((withinRange && withinBound) || ai.justTurnedAround) {
    switch (ai.direction) {
      case "DOWN":
        return {
          ...ai,
          y: ai.y + 1,
          justTurnedAround: false
        };

      case "UP":
        return {
          ...ai,
          y: ai.y - 1,
          justTurnedAround: false
        };
      case "LEFT":
        return {
          ...ai,
          x: ai.x - 1,
          justTurnedAround: false
        };
      case "RIGHT":
        return {
          ...ai,
          x: ai.x + 1,
          justTurnedAround: false
        };
      default:
        return ai;
    }
  } else {
    return {
      ...ai,
      direction: reverseDirection(ai.direction),
      justTurnedAround: true
    };
  }
}

function reducer(state, action) {
  let returnObj = {};

  const player = movePlayer(action.type, state.player);

  const playerHitWall = state.walls.some(
    wall => wall.x === player.x && wall.y === player.y
  );

  if (playerHitWall) {
    player.x = state.player.x;
    player.y = state.player.y;
  }

  const ais = state.ais
    .map(ai => moveAi(ai))
    .map((ai, i) => {
      const aiHitWall = state.walls.some(
        wall => wall.x === ai.x && wall.y === ai.y
      );
      if (aiHitWall) {
        ai.x = state.ais[i].x;
        ai.y = state.ais[i].y;
        ai.direction = reverseDirection(ai.direction);
      }
      return ai;
    });

  const playerHitEnemy = ais.some(
    (ai, i) =>
      (ai.x === player.x && ai.y === player.y) ||
      (ai.x === state.player.x &&
        ai.y === state.player.y &&
        state.ais[i].x === player.x &&
        state.ais[i].y === player.y)
  );

  if (playerHitEnemy) {
    player.x = state.player.init_x;
    player.y = state.player.init_y;
  }

  returnObj = { player, ais, walls: state.walls };

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
