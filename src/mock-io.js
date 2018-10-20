'use strict';

const mockIo = {
  emit: () => {},
  to: () => {
    return {
      emit: () => {} 
    };
  },
};

module.exports = mockIo;
