const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	// console.log(Date.parse(date));
	// if (isNaN(Date.parse(date))) return 'Unable to determine the time of year!';
	// const month = date.getMonth();
	// const day = date.getDate();
	// console.log(day);
	// console.log(month)
	// let season;
	// if (month >= 1 && month <= 3) season = "winter";
	// if (month === 3 && day > 19) season = "spring";
	// if (month > 3 && month <= 6) season = "spring";
	// if (month === 6 && day > 20) season = "summer";
	// if (month > 6 && month <= 9) season = "summer";
	// if (month === 9 && day > 21) season = "fall";
	// if (month > 9 && month <= 12) season = "fall";
	// if (month === 12 && day > 20) season = "winter";
	// return season;
//Y2K Fix
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

// const fakeDate = {
// 	toString() {
// 		return Date.prototype.toString.call(new Date());
// 	},
// 	[Symbol.toStringTag]: 'Date'
// };
// console.log(getSeason(fakeDate));
module.exports = {
	getSeason
};
