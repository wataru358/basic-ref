import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { heapSort } from './heap-sort';

describe('heapSort', () => {

  it('should return sorted array', () => {


    expect(heapSort(randomArray1000)).to.deep.equal(array1000);

  });
});
