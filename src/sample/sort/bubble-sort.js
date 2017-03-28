/*
 * originally from:
 * https://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/
 * https://github.com/nzakas/computer-science-in-javascript/
 * this is for self-teaching
 * and material for begners in ES6 tutorial
 */

 /**
 * A bubble sort implementation in JavaScript. The array
 * is sorted immutably. It returns new array.
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
export const bubbleSort = (array) => {

    let myArray = [].concat(array,[]),
        len = myArray.length,
        i,
        j,
        stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (myArray[j] > myArray[j+1]){
              let temp = myArray[j];
              myArray[j] = myArray[j+1];
              myArray[j+1] = temp;
            }
        }
    }

    return myArray;
}
