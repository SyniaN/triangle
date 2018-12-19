export const initialState = {
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
  ],
  walls: [
    {
      x: 20,
      y: 0
    },
    {
      x: 20,
      y: 40
    },
    {
      x: 40,
      y: 60
    },
    {
      x: 20,
      y: 80
    },
    {
      x: 20,
      y: 100
    },
    {
      x: 20,
      y: 120
    },
    {
      x: 40,
      y: 120
    },
    {
      x: 20,
      y: 160
    },
    {
      x: 40,
      y: 160
    },
    {
      x: 60,
      y: 160
    },
    {
      x: 80,
      y: 160
    },
    {
      x: 100,
      y: 120
    },
    {
      x: 80,
      y: 120
    }
  ]
};
