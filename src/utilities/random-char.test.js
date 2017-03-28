import { expect } from 'chai';
import { randomChar } from './random-char';

describe('randomChar', () => {
  it('should return random characters with given length', () => {

    const expected = 8;
    expect(randomChar(8).length).to.equal(expected);

  });
});
