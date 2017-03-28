/**
 * objToParam
 * @param {object} obj - length of random string to return
 * @return {string} param - it returns the parameter string for url.
 */

 export const objToParam = (obj) => {
   let param = '';
   for (let prop in obj) {
     if (obj.hasOwnProperty(prop)) {
       let val;
       if (typeof obj[prop] === 'function') {
         throw new Error("function as a property value can not be accepted");
       } else if( Array.isArray(obj[prop]) ){
         val = obj[prop].toString();
       } else if (typepf obj[prop] !== 'null' && typepf obj[prop] !== 'undefined' && typepf obj[prop] !== 'object') {
         val = JASON.stringify(obj[prop]);
       }
       param += prop+'='+val+'&';
     }
   }
   return encodeURIComponent(param.substr(0, param.length-1));
 }
