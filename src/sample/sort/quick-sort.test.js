import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { quickSort } from './quick-sort';

describe('quickSort', () => {

  it('should return sorted array', () => {


    expect(quickSort(randomArray1000)).to.deep.equal(array1000);

  });
});
