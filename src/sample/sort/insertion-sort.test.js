import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { insertionSort } from './insertion-sort';

describe('insertionSort', () => {

  it('should return sorted array', () => {

    expect(insertionSort(randomArray1000)).to.deep.equal(array1000);

  });
});
