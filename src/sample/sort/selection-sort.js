/**
 * originally from:
 * http://codingmiles.com/sorting-algorithms-selection-sort-using-javascript/
 * https://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/
 * this is for self-teaching
 * and material for beginners in ES6 tutorial
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
export const selectionSort = (array) => {

  let len = array.length,
  i, j,
  min;

  for( i = 0; i < len; i++){

    min = i;

    for(j = i + 1; j < len; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }

  }
  return array

}
