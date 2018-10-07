'use strict';

/**
 * `dataStore`
 * Mock dataStore for unit testing purposes.
*/
const mockDataStore = {
  player: {
    creation: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    state: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },
  moveForward: false,
  moveBackward: false,
  turnLeft: false,
  turnRight: false,
  moveUp: false,
  moveSpeed : 10,
  turnSpeed: 2,
};

module.exports = mockDataStore;
