import { expect } from 'chai';
import { shuffleArray } from './shuffle-array';

describe('shuffleArray', () => {
  it('given an input of array, should return "shuffled" array with same length', () => {

    const originalArray = [1,2,3,4,5,6,7,8,9,10];
    const actual = shuffleArray(originalArray);

    expect(actual.length).to.equal(originalArray.length);
    //console.log(actual, originalArray);
    expect(actual).not.to.equal(originalArray);

  });
});
