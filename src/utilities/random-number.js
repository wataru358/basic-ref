/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * returns a random num in range of min(inclusive) & max (inclusive)
 * @param {number} min - minimum number
 * @param {number} max - maximum number
 * @return {number} result - Random number generated.
 */
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
