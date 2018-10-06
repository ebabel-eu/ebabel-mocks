const mockTHREEx = require('../src/mock-threex');

test('THREEx.WindowResize can be instantiated', () => {
  const windowResize = new mockTHREEx.WindowResize();
  expect(windowResize !== undefined && windowResize !== null).toBe(true);
});
