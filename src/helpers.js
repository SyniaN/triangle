export function isCollidingWithItems(actor, array) {
  return array.some(wall => wall.x === actor.x && wall.y === actor.y);
}

export function moveActor(actionType, actor, bound) {
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

export function reverseDirection(direction) {
  if (direction === "MOVE_UP") return "MOVE_DOWN";
  if (direction === "MOVE_DOWN") return "MOVE_UP";
  if (direction === "MOVE_RIGHT") return "MOVE_LEFT";
  if (direction === "MOVE_LEFT") return "MOVE_RIGHT";
  return undefined;
}
