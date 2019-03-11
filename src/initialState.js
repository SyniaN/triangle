const player = {
  init_x: 0,
  init_y: 0,
  x: 0,
  y: 0
};
const walls = [
  {
    x: 3,
    y: 4
  },
  {
    x: 1,
    y: 3
  },
  {
    x: 1,
    y: 2
  },
  {
    x: 1,
    y: 1
  },
  {
    x: 1,
    y: 0
  }
];
const ais = [
  {
    init_x: 3,
    init_y: 3,
    x: 3,
    y: 3,
    direction: "MOVE_DOWN"
  }
];
const finish = { x: 4, y: 4 };

export const initialState = {
  mapSize: 5,
  player,
  ais,
  finish,
  walls
};
