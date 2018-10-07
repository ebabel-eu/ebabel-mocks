const mockDataStore = require('../src/mock-data-store');

test('dataStore exists', () => {
  expect(mockDataStore !== undefined && mockDataStore !== null).toBe(true);
});

test('dataStore player has a name, position, and rotation', () => {
  expect(mockDataStore.player.name).toEqual(null);
  expect(mockDataStore.player.position).toEqual([0, 0, 0]);
  expect(mockDataStore.player.rotation).toEqual([0, 0, 0]);
});
