import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { selectionSort } from './selection-sort';

describe('selectionSort', () => {

  it('should return sorted array', () => {

    const expected = [1,2,3,4,5,6,7,8];
    expect(selectionSort(randomArray1000)).to.deep.equal(array1000);

  });
});
