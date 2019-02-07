import { useReducer } from "react";
import createContainer from "constate";
import { initialState } from "./initialState";

function moveActor(actionType, actor, bound) {
  const canMoveLeft = actor.x > 0;
  const canMoveRight = actor.x < bound;
  const canMoveUp = actor.y > 0;
  const canMoveDown = actor.y < bound;
  const reduceDirection = canMove =>
    canMove ? actor.direction : reverseDirection(actor.direction);

  switch (actionType) {
    case "MOVE_LEFT":
      return {
        ...actor,
        x: canMoveLeft ? actor.x - 1 : 0,
        direction: reduceDirection(canMoveLeft),
        justTurnedAround: !canMoveLeft
      };
    case "MOVE_RIGHT":
      return {
        ...actor,
        x: canMoveRight ? actor.x + 1 : bound,
        direction: reduceDirection(canMoveRight),
        justTurnedAround: !canMoveRight
      };
    case "MOVE_UP":
      return {
        ...actor,
        y: canMoveUp ? actor.y - 1 : 0,
        direction: reduceDirection(canMoveUp),
        justTurnedAround: !canMoveUp
      };
    case "MOVE_DOWN":
      return {
        ...actor,
        y: canMoveDown ? actor.y + 1 : bound,
        direction: reduceDirection(canMoveDown),
        justTurnedAround: !canMoveUp
      };
    default:
      return actor;
  }
}

function reverseDirection(direction) {
  if (direction === "MOVE_UP") return "MOVE_DOWN";
  if (direction === "MOVE_DOWN") return "MOVE_UP";
  if (direction === "MOVE_RIGHT") return "MOVE_LEFT";
  if (direction === "MOVE_LEFT") return "MOVE_RIGHT";
  return undefined;
}

function reducer(state, action) {
  let returnObj = {};

  const player = moveActor(action.type, state.player, state.mapSize - 1);

  const playerHitWall = state.walls.some(
    wall => wall.x === player.x && wall.y === player.y
  );

  if (playerHitWall) {
    player.x = state.player.x;
    player.y = state.player.y;
  }

  const ais = state.ais
    .map(ai => moveActor(ai.direction, ai, state.mapSize - 1))
    .map((ai, i) => {
      const aiHitWall = state.walls.some(
        wall => wall.x === ai.x && wall.y === ai.y
      );
      if (aiHitWall) {
        ai.x = state.ais[i].x;
        ai.y = state.ais[i].y;
        ai.direction = reverseDirection(ai.direction);
        ai.justTurnedAround = true;
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

  returnObj = { ...state, player, ais, walls: state.walls };

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
