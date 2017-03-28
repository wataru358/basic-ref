/**
 * http://110chang.com/knowledge/javascript-sort-argorythm/
 * A radix sort implementation in JavaScript.
 * @param {Array} array An array of items to sort. Value should be decimal number
 * @param {number} d - the digit of the largest number in decimal number, have to be put manually
 * @return {Array} The sorted array.
 */
export const radixSortAlt = (array, digit) => {
  let b = [],
  d = 0,
  i = 0,
  j, n,
  r = 1;
  for (; i < 10; i++) {
    b[i] = [];
  }
  for(; d < digit; ++d) {
    for (i = 0; i < array.length; i++) {
      b[(array[i] / r) % 10 | 0].push(array[i]);
    }
    for(i = 0, j = 0; j < b.length; j++) {
      if (typeof b[j] === 'undefined') {
        continue
      }
      for(n = 0; n < b[j].length; n++) {
        array[i++] = b[j][n]
      }
    }
    for (i = 0; i < b.length; i++) {
      b[i] = []
    }
    r *= 10
  }
  return array
}
