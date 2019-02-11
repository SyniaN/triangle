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

export const initialState = {
  mapSize: 15,
  player: {
    init_x: 0,
    init_y: 0,
    x: 0,
    y: 0
  },
  ais: [
    {
      init_x: 3,
      init_y: 3,
      x: 3,
      y: 3,
      direction: "MOVE_DOWN"
    }
  ],
  finish: {
    x: 14,
    y: 14
  },
  walls: walls
};
