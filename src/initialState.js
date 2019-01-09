import { p } from "./constants";

export const initialState = {
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
      direction: "DOWN"
    },
    {
      init_x: 12,
      init_y: 2,
      x: 12,
      y: 2,
      direction: "UP"
    },
    {
      init_x: 6,
      init_y: 14,
      x: 6,
      y: 14,
      direction: "RIGHT"
    }
  ],
  walls: [
    {
      x: 2,
      y: 0
    },
    {
      x: 2,
      y: 4
    },
    {
      x: 4,
      y: 6
    },
    {
      x: 2,
      y: 8
    },
    {
      x: 2,
      y: 10
    },
    {
      x: 2,
      y: 12
    },
    {
      x: 4,
      y: 12
    },
    {
      x: 2,
      y: 16
    },
    {
      x: 4,
      y: 16
    },
    {
      x: 6,
      y: 16
    },
    {
      x: 8,
      y: 16
    },
    {
      x: 10,
      y: 12
    },
    {
      x: 8,
      y: 12
    }
  ]
};
