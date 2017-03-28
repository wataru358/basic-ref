/**
 * originally from:
 * this is for self-teaching
 * and material for beginners in ES6 tutorial
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
export const heapSort = (array) => {
  let i = array.length / 2 - 1 | 0,
  heapify = (array, i, size) => {

    let l = 2 * i + 1, r = 2 * i + 2, largest = 0;
    if(l < size && array[l] > array[i]){
      largest = l
    } else {
      largest = i
    }

    if(r < size && array[r] > array[largest]){

      largest = r

    }

    if (largest !== i) {

      array = swap(array, i, largest)
      array = heapify(array, largest, size);

    }
    return array

  },
  swap = (array, i, j) => {

    let temp = array[i];

    array[i] = array[j],
    array[j] = temp;

    return array
  }
  
  for(; i >= 0; i--){
    array = heapify(array, i, array.length);
  }
  for(i = array.length - 1; i > 0; i--){
    array = swap(array, 0, i);
    array = heapify(array, 0, i);
  }
  return array
}
