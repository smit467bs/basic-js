const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	let error = '\'arr\' parameter must be an instance of the Array!'
	if (Array.isArray(arr) === false) throw new Error('\'arr\' parameter must be an instance of the Array!');
	let transformArray = array = arr.flatMap((v, i, a) => {

		if (a[i - 1] === '--double-next') return [v, v];
		if (a[i + 1] === '--double-prev') return [v, v];
		if (a[i + i] === '--discard-prev') return [];
		if (a[i - 1] === '--discard-next') return [];
		if (v.toString().startsWith('--d')) return [];
		return v;
	});
	return [...transformArray];
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

console.log(transform(
	[1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
))
module.exports = {
	transform
};
