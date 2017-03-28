import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { bubbleSort } from './bubble-sort';

describe('bubbleSort', () => {

  it('should return sorted array', () => {

    expect(bubbleSort(randomArray1000)).to.deep.equal(array1000);

  });
});
