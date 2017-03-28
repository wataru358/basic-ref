import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { mergeSort } from './merge-sort';

describe('mergeSort', () => {

  it('should return sorted array', () => {


    expect(mergeSort(randomArray1000)).to.deep.equal(array1000);

  });
});
