'use strict';

const mockSocket = {
  on: () => {},
  broadcast: {
    emit: () => {},
  },
};

module.exports = mockSocket;
