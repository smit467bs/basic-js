const {NotImplementedError} = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
let countH = 0;

function calculateHanoi(disksNumber, turnsSpeed) {
	// let countH = 0;

	function toh(n) {
		countH++;
		if (n > 1) {
			toh(n - 1);
			// console.log("Move disk from tower ",src,"to tower",des);
			toh(n - 1);
		}
		return;
	}

	toh(disksNumber);
	const countTime = Math.round(countH / ((turnsSpeed / 60) / 60));
	return {
		turns: countH,
		seconds: countTime,
	};
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

// console.log(calculateHanoi(9, 4308));
module.exports = {
	calculateHanoi
};
