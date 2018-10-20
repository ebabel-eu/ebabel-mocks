const mockSocket = require('../src/mock-socket');

test('Socket exists', () => {
  expect(mockSocket !== undefined && mockSocket !== null).toBe(true);
});

test('Socket exposes expected methods', () => {
  expect(mockSocket.on).not.toBe(undefined);
  expect(mockSocket.broadcast).not.toBe(undefined);
  expect(mockSocket.broadcast.emit).not.toBe(undefined);
});
