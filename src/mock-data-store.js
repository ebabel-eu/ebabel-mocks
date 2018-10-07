'use strict';

/**
 * `dataStore`
 * Mock dataStore for unit testing purposes.
*/
const mockDataStore = {
  player: {
    creation: {},
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
};

module.exports = mockDataStore;
