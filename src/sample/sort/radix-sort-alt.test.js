import { array1000, randomArray1000 } from './test-array';
import { expect } from 'chai';
import { radixSortAlt} from './radix-sort-alt';

describe('radixSortAlt', () => {

  it('should return sorted array', () => {

    expect(radixSortAlt(randomArray1000,3)).to.deep.equal(array1000);

  });
});
