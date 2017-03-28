import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import { df } from './dom-factory';

jsdom({skipWindowCheck:true});
describe('df', () => {

  it('should return a dom element based with attributes based on given arguments', () => {

    const expectedId = 'line';
    const expectedStyle = 'block';
    const expectedTagName = 'SPAN';
    const expectedNodeType = 1;
    const expectedTypeof = 'function';

    const elm = df('span',
    {
      id:'line',
      style:{
        width:'7px',
        height:'500px',
        display:'block'
      }
    },
    {
      click:function(e){
        console.log(e);
      }
    }
  );

    expect(elm.id).to.equal(expectedId);
    expect(elm.style.display).to.equal(expectedStyle);
    expect(elm.tagName).to.equal(expectedTagName);
    expect(elm.nodeType).to.equal(expectedNodeType);
    expect(typeof elm.click).to.equal(expectedTypeof);
  });
});
