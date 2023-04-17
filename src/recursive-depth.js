const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => this.calculateDepth(t)))
		else return 0
	}
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}
// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
module.exports = {
	DepthCalculator
};
