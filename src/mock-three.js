const hexStringToInt = require('./hex-string-to-int');

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
    constructor(color) {
      this.position = {
        set: () => {}
      };

      this.color = color;

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

  PositionalAudio: class PositionalAudio {
    constructor() {}
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

  Texture: class Texture {
    constructor() {}
  },

  TextureLoader: class TextureLoader {
    constructor() {}
    load() {}
  },

  Sprite: class Sprite {
    constructor() {
      this.scale = {
        set: () => {},
      };
      this.center = {
        set: () => {},
      };
    }
  },

  SpriteMaterial: class SpriteMaterial {
    constructor() {}
  },

  Mesh: class Mesh {
    constructor() {
      this.position = {
        set: () => {}
      };
    }
  },

  MeshBasicMaterial: class MeshBasicMaterial {
    constructor() {}
  },

  Box3: class Box3 {
    constructor() {}
    setFromObject() {
      return {
        getSize: (input) => input,
        getCenter: (input) => input
      };
    }
  },

  Vector3: class Vector3 {
    constructor() {}
  },
};

module.exports = mockTHREE;
