export const initialState = {
  mapSize: 5,
  player: {
    init_x: 0,
    init_y: 0,
    x: 0,
    y: 0
  },
  ais: [
    {
      init_x: 4,
      init_y: 4,
      x: 4,
      y: 4,
      direction: "MOVE_DOWN"
    }
  ],
  walls: [
    {
      x: 2,
      y: 0
    }
  ]
};
