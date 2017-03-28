import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { mergeSortAlt } from './merge-sort-alt';

describe('mergeSortAlt', () => {

  it('should return sorted array', () => {

    expect(mergeSortAlt(randomArray1000)).to.deep.equal(array1000);

  });
});
