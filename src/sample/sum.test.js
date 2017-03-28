import { expect } from 'chai';
import sum from './sum';
describe('sum', () => {
  it('should return the sum of the two arguments (number) given', () => {
    const firstArg = 2;
    const secondArg = 3;
    const expected = 5;//firstArg + secondArg
    expect(sum(firstArg,secondArg)).to.equal(expected);

  });
});
