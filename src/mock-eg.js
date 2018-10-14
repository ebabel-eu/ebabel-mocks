'use strict';

/**
 * `EG`
 * Mock EG (eBabel Games) for unit testing purposes.
*/
const mockEG = {
  scene: null,
  camera: null,
  dataStore: {
    npcStates: [],
    player: {
      name: null,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    otherPlayerStates: {},
    disablePlayerControls: false,
    defaultVolume: 1,
  },
};

module.exports = mockEG;
