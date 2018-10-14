const mockEG = require('../src/mock-eg');

test('EG exists', () => {
  expect(mockEG !== undefined && mockEG !== null).toBe(true);
});

test('EG player has a name, position, and rotation', () => {
  expect(mockEG.dataStore.player.name).toEqual(null);
  expect(mockEG.dataStore.player.position).toEqual([0, 0, 0]);
  expect(mockEG.dataStore.player.rotation).toEqual([0, 0, 0]);
});
