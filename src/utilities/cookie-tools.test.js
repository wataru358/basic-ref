import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import { cookieSet, cookieGet, cookieRm } from './cookie-tools';

jsdom({skipWindowCheck:true});
describe('cookieSet', () => {
  it('should set a cookie', () => {

    const testKey = 'myCookie';
    const expected = 'myValue';
    cookieSet({
      key:testKey,
      value:expected,
      endDate:60 * 60 * 24 * 7
    });

    expect(document.cookie).to.contain(expected);

  });
})

describe('cookieGet', () => {
  it('should return the value of a given key in the cookie', () => {

    const testKey = 'myCookie';
    const expected = 'myValue';

    cookieSet({
      key:testKey,
      value:expected,
      endDate:60 * 60 * 24 * 7
    });

    const actual = cookieGet(testKey);

    expect(actual).to.equal(expected);

  });
});
/*describe('cookieRm', () => {
  it('should remove the cookie of a given key and path[]', () => {

    const testKey = 'myCookie';
    const expected = 'myValue';
    const extraKey = 'foo';
    const extraValue = 'bar';
    const fakeKey = 'hogehoge';

    cookieSet({
      key:testKey,
      value:expected,
      endDate:60 * 60 * 24 * 7
    });

    cookieSet({
      key:extraKey,
      value:extraValue,
      endDate:60 * 60 * 24 * 7
    });

    cookieRm(testKey);
    expect(document.cookie).to.not.contain(expected);
    expect(document.cookie).to.contain(extraValue);

    const failed = cookieRm(fakeKey);
    expect(failed).to.not.be.ok;

  });
});*/
