const fs = require('node:fs/promises');
const fuzzysearch = require("fuzzysearch")

(async () => {
	const data = await fs.readFile("./google-10000-english-usa-no-swears-medium.txt", {encoding: "utf8"})
	const splitted = data.split("\n")
	const emptyRemoved = splitted.filter(word=>word)
	//console.time("fuzzysearch")
	for (const one of emptyRemoved) {
		fuzzysearch(leaveCharacters(one, 3), one)
	}
	//console.timeEnd("fuzzysearch")
})()


// Algorithms to modify string

// Remove characters randomly until X characters are left.

/**
 * @param {string} str
 * @param {number} numToLeave
 * @returns {string}
 */
function leaveCharacters(str, numToLeave) {
	const removed = removeRandom(str, 1)
	if (removed.length <= numToLeave) {
		return removed
	} else {
		return leaveCharacters(removed, numToLeave)
	}
}

/**
 * @param {string} str
 * @param {number} amount
 * @returns {string}
 */
function removeRandom(str, amount) {
	for (let i = 0; i < amount; i++) {
		const max = str.length - 1;
		const pos = Math.round(Math.random() * max);
		str = str.slice(0, pos) + str.slice(pos + 1);
	}
	return str;
}
