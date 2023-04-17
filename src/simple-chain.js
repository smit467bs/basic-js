const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	length: 0,
	arr: [],
	getLength() {
		return this.length;
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	},
	addLink(value) {
		this.length++;
		this.arr.push(`${value}`)
		return this;
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	},
	removeLink(position) {
		if (position > this.length || position <= 0 || typeof position != 'number') {
			this.length = 0;
			this.arr = 0;
			const messageError = `You can\'t remove incorrect link!`
			throw new Error(messageError);
		} else {
			position--;
			for (let i = position; i < this.length - 1; i++) {
				this.arr[i] = this.arr[i + 1];
			}
			this.arr.pop();
			this.length--;
		}
		return this;
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	},
	reverseChain() {
		this.arr = this.arr.reverse();
		return this;
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	},
	finishChain() {

		return this.arr.join('~~');
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
};

module.exports = {
	chainMaker
};
