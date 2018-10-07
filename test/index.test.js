const {
  hexStringToInt,
  mockTHREEx,
  mockTHREE,
  mockDataStore,
  mockCanvas,
} = require('../index');

test('Export all expected modules.', () => {
  expect(hexStringToInt !== undefined).toBe(true);
  expect(mockTHREEx !== undefined).toBe(true);
  expect(mockTHREE !== undefined).toBe(true);
  expect(mockDataStore !== undefined).toBe(true);
  expect(mockCanvas !== undefined).toBe(true);
});
