const { hexStringToInt, mockTHREEx, mockTHREE, mockDataStore } = require('../index');

test('convert hex string #cccccc to int 13421772 ', () => {
  const result = hexStringToInt('#cccccc');
  expect(result).toBe(13421772);
});

test('THREEx.WindowResize can be instantiated', () => {
  const windowResize = new mockTHREEx.WindowResize();
  expect(windowResize !== undefined && windowResize !== null).toBe(true);
});

test('THREE.Clock can be instantiated and has a start method that can be called', () => {
  const clock = new mockTHREE.Clock();
  expect(clock !== undefined && clock !== null).toBe(true);
  expect(typeof clock.start).toBe('function');
  expect(clock.start() !== null).toBe(true);
});

test('THREE.PointLight can be instantiated and has a position property with a set method that can be called', () => {
  const pointLight = new mockTHREE.PointLight();
  expect(pointLight !== undefined && pointLight !== null).toBe(true);
  expect(pointLight.position !== undefined).toBe(true);
  expect(pointLight.position.set() !== null).toBe(true);
});

test('THREE.PointLight can not instantiated with valid non-default color string ', () => {
  const color='#ff00cc';
  // Invalid color #ff00zz
  const pointLight = new mockTHREE.PointLight(color);
  expect(pointLight !== undefined && pointLight !== null).toBe(true);
  expect(pointLight.position !== undefined).toBe(true);
  expect(pointLight.position.set() !== null).toBe(true);
});


test('THREE.Scene can be instantiated and has an add method that can be called', () => {
  const scene = new mockTHREE.Scene();
  expect(scene !== undefined && scene !== null).toBe(true);
  expect(scene.add() !== null).toBe(true);
});

test('THREE.PerspectiveCamera can be instantiated', () => {
  const camera = new mockTHREE.PerspectiveCamera();
  expect(camera !== undefined && camera !== null).toBe(true);
  expect(camera.position !== undefined).toBe(true);
  expect(camera.position.set() !== null).toBe(true);
  expect(camera.rotation !== undefined).toBe(true);
  expect(camera.rotation.set() !== null).toBe(true);
  expect(camera.add() !== null).toBe(true);
});

test('THREE.AudioListener can be instantiated', () => {
  const audioListener = new mockTHREE.AudioListener();
  expect(audioListener !== undefined && audioListener !== null).toBe(true);
});

test('THREE.Audio can be instantiated', () => {
  const audio = new mockTHREE.Audio();
  expect(audio !== undefined && audio !== null).toBe(true);
});

test('THREE.AudioLoader can be instantiated', () => {
  const audioLoader = new mockTHREE.AudioLoader();
  expect(audioLoader !== undefined && audioLoader !== null).toBe(true);
  expect(audioLoader.load() !== null).toBe(true);
});

test('THREE.WebGLRenderer can be instantiated', () => {
  const renderer = new mockTHREE.WebGLRenderer();
  expect(renderer !== undefined && renderer !== null).toBe(true);
  expect(renderer.setClearColor() !== null).toBe(true);
  expect(renderer.setSize() !== null).toBe(true);
});

test('THREE.BoxBufferGeometry can be instantiated', () => {
  const geometry = new mockTHREE.BoxBufferGeometry();
  expect(geometry !== undefined && geometry !== null).toBe(true);
});

test('THREE.TextureLoader can be instantiated', () => {
  const texture = new mockTHREE.TextureLoader();
  expect(texture !== undefined && texture !== null).toBe(true);
  expect(texture.load() !== null).toBe(true);
});

test('THREE.MeshBasicMaterial can be instantiated', () => {
  const material = new mockTHREE.MeshBasicMaterial();
  expect(material !== undefined && material !== null).toBe(true);
});

test('THREE.Mesh can be instantiated', () => {
  const mesh = new mockTHREE.Mesh();
  expect(mesh !== undefined && mesh !== null).toBe(true);
  expect(mesh.position !== undefined).toBe(true);
  expect(mesh.position.set() !== null).toBe(true);
});

test('dataStore exists', () => {
  expect(mockDataStore !== undefined && mockDataStore !== null).toBe(true);
});
