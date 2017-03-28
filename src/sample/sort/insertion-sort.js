/**
 * originally from:
 * http://codingmiles.com/sorting-algorithms-insertion-sort-using-javascript/
 * https://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/
 * this is for self-teaching
 * and material for beginners in ES6 tutorial
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
 export const insertionSort = (arr) => {
   let array = [].concat([],arr),
   len = array.length,
   i ,j;

   for (i = 0; i < len; i++) {

      let temp = array[i];

      for(j = i - 1; j > -1 && array[j] > temp; j-- ) {

          array[j + 1] = array[j];

      }
      array[j + 1] = temp
   }

   return array

 }
