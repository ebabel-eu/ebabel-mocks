const mockCanvas = require('../src/mock-canvas');

test('mockCanvas can create a context with a font', () => {
  const result = mockCanvas.getContext();
  expect(result.font).toBe('Arial');
  expect(result.fillStyle).toBe('#ff00ff');
});
