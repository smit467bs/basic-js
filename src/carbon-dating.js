const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const k = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(ext) {
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	if (typeof ext !== 'string') return false;
	if (isNaN(parseInt(ext))) return false;
	if (Math.sign(ext) === -1) return false;
	let inner = parseInt(ext);
	if (inner === 0 || inner >= 15) return false;
	if (ext >= 5730) return false;
	const result = Math.ceil(Math.log(MODERN_ACTIVITY / ext) / k);
	console.log('result: ' + result);
	console.log('enter: ' + ext);
	return result;
}

module.exports = {
	dateSample
};
