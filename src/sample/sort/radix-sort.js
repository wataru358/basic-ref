/**
 * http://taoalpha.github.io/blog/2016/01/19/tech-javascript-sorting-algorithm-radix-sort/
 * A radix sort implementation in JavaScript.
 * @param {Array} array An array of items to sort. The value for each index should be int
 * @return {Array} The sorted array.
 */
export const radixSort = (a) => {
  let array = [].concat([],a);
  const getDigit = (n, nth) => {
    let r = 0;
    while(nth--) {
      r = n % 10;
      n = Math.floor((n - r) / 10)
    }
    return r
  }
  let max = Math.floor(Math.log10(Math.max.apply(Math,array)));

  for (let i = 0; i < max + 1; i++) {
    let digitBuckets = [],
    idx = 0;

    for(let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i+1);

      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(array[j]);
    }
    for(let t = 0; t < digitBuckets.length; t++){
      if(digitBuckets[t] && digitBuckets[t].length > 0){
        for(let j = 0;j<digitBuckets[t].length;j++){
          array[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
  return array
}
