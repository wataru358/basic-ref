import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { radixSort } from './radix-sort';

describe('radixSort', () => {

  it('should return sorted array', () => {

    const expected = [1,2,3,4,5,6,7,8];
    expect(radixSort(randomArray1000)).to.deep.equal(array1000);

  });
});
