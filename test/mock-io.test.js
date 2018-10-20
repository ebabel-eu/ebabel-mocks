const mockIo = require('../src/mock-io');

test('io exists', () => {
  expect(mockIo !== undefined && mockIo !== null).toBe(true);
});

test('io exposes expected methods', () => {
  expect(mockIo.emit).not.toBe(undefined);
  expect(mockIo.to).not.toBe(undefined);
  expect(mockIo.to().emit).not.toBe(undefined);
});
