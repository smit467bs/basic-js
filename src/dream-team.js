const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (Array.isArray(members) === false) return false;
	members.sort();
	let sortedArray = [];
	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] === 'string') {
			sortedArray.push(members[i].trim().toUpperCase())
		}
	}
	let result = '';
	sortedArray.sort();
	console.log(sortedArray)
	for (let i = 0; i < sortedArray.length; i++) {
		if (typeof sortedArray[i] === "string") {
			result += sortedArray[i][0].toUpperCase()
		}
	}
	return result;
}

module.exports = {
	createDreamTeam
};
