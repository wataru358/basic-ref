/**
 * paramToObj
 * @return {Object} obj - url query converted to object
 */

 export const paramToObj = (obj) => {
  let obj = {},
  pairs = decodeURIComponent(window.location.search.substring(1).split('&'));
  for (let i=0;i<vars.length;i++) {
    let pair = pairs[i].split("=");
    obj[pair[0]] = pair[1];
  }
  return obj;
 }
