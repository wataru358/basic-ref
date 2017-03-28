/**
 * A simple light weight dom factory
 * Use for quick JS test / dev where complex html or huge libraries are not required
 * @param {string} tagName - tag name
 * @param {object=} attr - characters you want to generate random string
 * @param {object|function} object or function - event handler. {key:function}(i.e, {click:function(e){}}) or function. When function is handed, it attaches it to click event.
 * @param {object} object - the object you want to use as 'this' for eventHandler
 * @return {dom} dom element - returns dom element generated. Use as you like.
 */
export const df = (tagName, attr, eventHandler, context) => {

  let elem = document.createElement(tagName);

  if(attr) {
    for (var key in attr) {
      //if attr['style'] is an object, we iterate. If it is just string, we use setAttribute
      if(key === 'style' && typeof attr['style'] === 'object') {

        for (var prop in attr['style']) {

          elem.style[prop] = attr['style'][prop]

        }

      } else if (key === 'className') {//to avoid elem.setAttribute('className','foobar')

        elem.className = attr['className']

      } else {

        elem.setAttribute(key,attr[key])

      }
    }
  }
  if(eventHandler) {
    //if eventHandler is a function, we attach it to click event.
    if(typeof eventHandler === 'function') {

      //if context is given, it will be the excution context via bind method
      eventHandler = context ? eventHandler.bind(context) : eventHandler;
      elem.addEventListener('click', eventHandler);

    } else if(typeof eventHandler === 'object') {

      for (var key in eventHandler) {
        eventHandler = context ? eventHandler[key].bind(context) : eventHandler[key];
        elem.addEventListener(key, eventHandler[key]);
      }

    }
  }
  return elem
}
