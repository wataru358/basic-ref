/**
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * Returns randomly shuffled array
 * is sorted immutably. It returns new array.
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The randomly shuffled array.
 */

export const shuffleArray = (array) => {
  let myArray = [].concat(array),
  currentIndex = myArray.length,
  temp,
  randomIndex;

  while(0 !== currentIndex){

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = myArray[currentIndex];
    myArray[currentIndex] = myArray[randomIndex];
    myArray[randomIndex] = temp;

  }

  return myArray

}
