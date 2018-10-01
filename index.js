'use strict';

/**
 * `hexStringToInt`
 * Convert string hex to integer.
 * @param {string} input - Input hexadecimal color in string format, i.e. #ff0099
 * @returns {number} Integer conversion. 
 */
const hexStringToInt = (input) => parseInt(input.replace(/#/g, ''), 16);

/**
 * `mockTHREEx`
 * Mock THREEx.js for unit testing purposes.
 */
const mockTHREEx = {
  WindowResize: class WindowResize {
    constructor() {}
  }
};

/**
 * `mockTHREE`
 * Mock THREE.js for unit testing purposes.
 */
const mockTHREE = {
  Clock: class Clock {
    constructor() {
      this.start = () => {};
    }
  },

  PointLight: class PointLight {
    constructor() {
      this.position = {
        set: () => {}
      };

      this.color = null;

      // Implicit string to hex conversion.
      if (typeof this.color === 'string') {
        const isValidColor = /^#[0-9A-F]{6}$/i.test(this.color);
        if (isValidColor) {
          this.color = hexStringToInt(this.color);
        } else {
          throw new Error(`Invalid color ${this.color}`);
        }
      }
    }
  },

  Scene: class Scene {
    constructor() {}
    add() {}
  },

  PerspectiveCamera: class PerspectiveCamera {
    constructor() {
      this.position = {
        set: () => {}
      };
      this.rotation = {
        set: () => {}
      };
    }
    add() {}
  },

  AudioListener: class AudioListener {
    constructor() {}
  },

  Audio: class Audio {
    constructor() {}
  },

  AudioLoader: class AudioLoader {
    constructor() {}
    load() {}
  },

  WebGLRenderer: class WebGLRenderer {
    constructor() {
      this.domElement = document.createElement('canvas');
    }
    setClearColor() {}
    setSize() {}
  },

  BoxBufferGeometry: class BoxBufferGeometry {
    constructor() {}
  },

  TextureLoader: class TextureLoader {
    constructor() {}
    load() {}
  },

  MeshBasicMaterial: class MeshBasicMaterial {
    constructor() {}
  },

  Mesh: class Mesh {
    constructor() {
      this.position = {
        set: () => {}
      };
    }
  },

  Box3: class Box3 {
    constructor() {}
    setFromObject() {
      return {
        getSize: () => {},
        getCenter: () => {}
      };
    }
  },

  Vector3: class Vector3 {
    constructor() {}
  },
};

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
};

module.exports = {
  hexStringToInt,
  mockTHREEx,
  mockTHREE,
  mockDataStore,
};
