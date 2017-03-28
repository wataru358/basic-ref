/*
 * originally from:
 * http://www.atmarkit.co.jp/ait/articles/0812/03/news140_2.html
 * this is for self-teaching
 * and material for beginners in ES6 tutorial
 */
 /**
 * A merge sort implementation in JavaScript.
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
export const mergeSort = (array,fn) => {

  if (array.length <= 1) {
    return array;
  }

  fn = fn || function(a, b) {
    return (a - b);
  }

  let middle = Math.floor(array.length / 2),
  left = mergeSort(array.slice(0,middle), fn),
  right = mergeSort(array.slice(middle), fn);

  let l = 0,
  r = 0;

  for (let i = 0; i < array.length; i++) {
    if ( (!(r < right.length) ) || ((l < left.length) && (fn(left[l],right[r]) < 0))) {
      array[i] = left[l];
      l++;
    } else {
      array[i] = right[r];
      r++;
    }
  }
  return array;
}
