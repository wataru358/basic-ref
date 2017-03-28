import { insertionSort } from './insertion-sort';
/**
 * originally from: http://www.growingwiththeweb.com/2015/06/bucket-sort.html
 * this is for self-teaching
 * and material for beginners in ES6 tutorial
 * @param {Array} array - An array of items to sort. The value for each index should be int
 * @param {number} size - size of bucket
 * @return {Array} The sorted array.
 */
export const bucketSort = (array, size) => {

  if(array.length === 0) {
    return array
  }
  let i,
  len = array.length,
  min = array[0],
  max = array[0];

  for(i = 1; i < len; i++){
    if (array[i] < min) {
      min = array[i]
    } else if (array[i] > max) {
      max = array[i]
    }
  }
  const bucketSize = size || 5

  let bucketCount = Math.floor((max - min) / bucketSize) + 1,
  buckets = [];
  for (i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - min) / bucketSize)].push(array[i]);
  }
  let result = [];
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = insertionSort(buckets[i]);
    for (var j = 0; j < buckets[i].length; j++) {
      result.push(buckets[i][j])
    }
  }
  return result

}
