import { useReducer } from "react";
import createContainer from "constate";
import { initialState } from "./initialState";
import { isCollidingWithItems, moveActor, reverseDirection } from "./helpers";

function reducer(state, action) {
  let returnObj = {};

  const player = moveActor(action.type, state.player, state.mapSize - 1);

  const playerHitWall = isCollidingWithItems(player, state.walls);

  if (playerHitWall) {
    player.x = state.player.x;
    player.y = state.player.y;
  }

  const ais = state.ais
    .map(ai => moveActor(ai.direction, ai, state.mapSize - 1))
    .map((ai, i) => {
      const aiHitWall = isCollidingWithItems(ai, state.walls);

      if (aiHitWall) {
        ai.x = state.ais[i].x;
        ai.y = state.ais[i].y;
        ai.direction = reverseDirection(ai.direction);
        ai.justTurnedAround = true;
      }
      return ai;
    });

  const playerHitEnemy = isCollidingWithItems(player, ais);

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
