/**
 * https://antjanus.com/blog/web-development-tutorials/understanding-quicksort-js-native-implementation/
 * http://webkatu.com/javascript-quicksort/
 * http://110chang.com/knowledge/javascript-sort-argorythm/
 * A quick sort implementation in JavaScript. The array
 * is sorted immutably. It returns new array.
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
export const quickSort = (array) => {

  if (array.length === 0) {
    return [];
  }
  let left = [],
      right = [],
      pivot = array[0];

  for (let i=0; i < array.length; i++){
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if(array[i] > pivot) {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));

}
