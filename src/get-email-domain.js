const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.substring(email.indexOf("@")+1, email.length)
  return  result.substring(result.indexOf("@")+1, result.length);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));
module.exports = {
  getEmailDomain
};
