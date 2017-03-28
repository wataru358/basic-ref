
/**
 * A quick sort implementation in JavaScript. The array
 * is sorted immutably. It returns new array.
 * @param {number} length - length of random string to return
 * @param {string} characters - characters you want to generate random string
 * @return {string} result - Random Characters generated.
 */
export const randomChar = (length = 12, chars = "abcdefghijklmnopqrstuvwxyz0123456789") => {
  let str = '';
  for( var i=0; i < length; i++ ) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str
}
