import { expect } from 'chai';
import { randomNum } from './random-number';

describe('randomNum', () => {
  it('should return a random number in a given range (min, max)', () => {

    const min = 3;
    const max = 5;
    const actual = randomNum(min,max);
    expect(actual).to.be.within(min,max);

  });
});
