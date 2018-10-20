const {
  hexStringToInt,
  mockTHREEx,
  mockTHREE,
  mockEG,
  mockCanvas,
  mockSocket,
  mockIo,
} = require('../index');

test('Export all expected modules.', () => {
  expect(hexStringToInt).not.toBe(undefined);
  expect(mockTHREEx).not.toBe(undefined);
  expect(mockTHREE).not.toBe(undefined);
  expect(mockEG).not.toBe(undefined);
  expect(mockCanvas).not.toBe(undefined);
  expect(mockSocket).not.toBe(undefined);
  expect(mockIo).not.toBe(undefined);
});
