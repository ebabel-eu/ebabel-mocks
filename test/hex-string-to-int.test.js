const hexStringToInt = require('../src/hex-string-to-int');

test('convert hex string #cccccc to int 13421772 ', () => {
  const result = hexStringToInt('#cccccc');
  expect(result).toBe(13421772);
});
