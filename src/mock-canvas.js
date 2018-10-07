'use strict';

const mockCanvas = {
  getContext: () => {
    return {
      font: 'Arial',
      fillStyle: '#ff00ff',
      fillText: () => {},
      measureText: () => 1,
    }
  },
}

module.exports = mockCanvas;
