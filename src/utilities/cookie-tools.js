/**
 * cookieSet
 * based on: https://developer.mozilla.org/ja/docs/Web/API/Document/cookie
 * @param {object} option - length of random string to return
 * @return {string} result - it returns the cookie string generated and set for confirmation
 */
export const cookieSet = (options) => {
  let defaultOp = {
    key:'myCookie',
    value:'myValue',
    path: '',
    domain:'',
    endDate:'', //Number || GMT String || Date
    secure: false //boolean
  },
  cookie_str = '',
  expires = '';
  options = Object.assign({}, defaultOp, options);

  if(options.endDate) {
    switch (options.endDate.constructor) {
      case Number:
        //https://en.wikipedia.org/wiki/Year_2038_problem
        expires = options.endDate === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + options.endDate;
        break;
      case String:
        expires = "; expires=" + options.endDate;
        break;
      case Date:
        expires = "; expires=" +options. endDate.toGMTString();
        break;
    }
  }
  cookie_str = escape(options.key) + '=' + escape(options.value) + expires + (options.domain ? '; domain=' + options.domain : '') + (options.path ? '; path=' + options.path : '') + (options.secure ? 'secure' : '');

  document.cookie = cookie_str;

  return cookie_str
}
/**
 * cookieGet
 * @param {string} key - the target key
 * @return {string|null} result - the value corresponding the key, when there is no matching key in the cookie, returns null.
 */
export const cookieGet = (key) => {
  if (document.cookie.length > 0) {
    let offset = document.cookie.indexOf(key+'=');
    if (offset != -1) {
      offset += key+'='.length;
      let end = document.cookie.indexOf(';',offset);
      end = end === -1 ? document.cookie.length : end;

      return unescape(document.cookie.substring(offset,end)).split('=')[1];
    }
  }
  return null;
}
/**
 * cookieRm removes cookie
 * based on: https://developer.mozilla.org/ja/docs/Web/API/Document/cookie
 * @param {object} options
 * @param {string} options.key - target key to remove
 * @param {string} [options.path] - target path, optional
 * cookieRm({
 *    key:'optionASelected',
 *    path:'/user/setting' //path is optional
 *  });
 */
export const cookieRm = (options) => {
  if(options) {
   document.cookie = escape(options.key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (options.path ? "; path=" + options.path : "");
   return true
  }
   return false;
}
