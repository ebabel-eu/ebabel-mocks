'use strict';

/**
 * `hexStringToInt`
 * Convert string hex to integer.
 * @param {string} input - Input hexadecimal color in string format, i.e. #ff0099
 * @returns {number} Integer conversion. 
 */
const hexStringToInt = (input) => parseInt(input.replace(/#/g, ''), 16);

module.exports = hexStringToInt;
