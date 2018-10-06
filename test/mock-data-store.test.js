const mockDataStore = require('../src/mock-data-store');

test('dataStore exists', () => {
  expect(mockDataStore !== undefined && mockDataStore !== null).toBe(true);
});
