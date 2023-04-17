const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	let arr1 = Array.from(s1);
	let arr2 = Array.from(s2);

	arr1.forEach(e => {
		if (arr2.includes(e)) {
			count++;
			arr2.splice(arr2.indexOf(e), 1);
		}
	});

	return count;
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	getCommonCharacterCount
};
