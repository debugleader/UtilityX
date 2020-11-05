/**
 * This function returns how many times the regex matches with the string
 * @param {String} s string to search
 * @param {object} y the regular expression to match
 * @returns {number} The number of times the regex matches
 */
const charCount = (s, y) => (s.match(new RegExp(y, 'g')) || []).length;
/**
 * This function returns the amount of spaces in the provided string
 * @param {String} s String to search for spaces
 * @returns {number} amount of spaces
 */
const spaceCount = (s) => [...s].filter((x) => x === ' ').length;
/**
 * This function removes all vowels from a string
 * @param {String} s string to remove vowels of
 * @returns {String} string without vowels
 */
const removeVowels = (s) => s.replace(/[aeiou]/gi, '');
/**
 * This function removes all consonants from a string
 * @param {String} s string to remove consonants
 * @returns {String} string without consonants
 */
const keepVowels = (s) => s.replace(/[^aeiou]/gi, '');
/**
 *This function sorts an array by ascending number order
 * @param {Array} x array to sort by number ascending
 * @returns {Array} sorted array
 */
const sortNumsAscending = (x) => (x || []).sort((a, b) => a - b);
/**
 *This function sorts an array by descending number order
 * @param {Array} x array to sort by number descending
 * @returns {Array} sorted array
 */
const sortNumsDescending = (x) => (x || []).sort((a, b) => b - a);
/**
 *This function sorts an array alphabetically
 * @param {Array} x array to sort alphabetically
 * @returns {Array} sorted array
 */
const sortByLetter = (x) => x.sort();
/**
 *This function sorts an array by length of items, shortest first
 * @param {Array} x array to sort by length
 * @returns {Array} sorted array
 */
const sortByShortestLength = (x) => x.sort((a, b) => a.length - b.length);
/**
 *This function sorts an array by length of items, longest first
 * @param {Array} x array to sort by length
 * @returns {Array} sorted array
 */
const sortByLongestLength = (x) => x.sort((a, b) => b.length - a.length);
/**
 * I dont know what this function does
 * @param {Array} x array to
 * @returns {Array}
 */
const checker = (x) => x.every((y, i, a) => y === a[0] && y !== null);
/**
 *This function choices a random element from an array
 * @param {Array} x array to choose from
 * @returns {*} Chosen item
 */
const randomElement = (x) => x[Math.floor(Math.random() * x.length)];
/**
 *This function checks if the type is an integer
 * @param {*} x variable to check
 */
const isInt = (n) => !(n % 1);
/**
 *This function checks if the type is a float
 * @param {*} x variable to check
 */
const isFloat = (n) => !!(n % 1);
/**
 *This function checks if the type is a string
 * @param {*} x variable to check
 */
const isString = (s) => typeof s === 'string';
/**
 *This function checks if the type is an array
 * @param {*} x variable to check
 */
const isArray = (a) => Array.isArray(a);
/**
 *This function rounds a float without unnecessary zero
 * @param {number} x float to round
 * @returns {number} rounded Number
 */
const round = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
/**
 *This function deletes any duplicate values
 * @param {Array} x Array to remove duplicates
 * @returns {Array} array with no duplicates
 */
const removeDuplicates = (x) => [...new Set(x)];
/**
 *This function removes any falsy values
 * @param {Array} x Array to remove falsy values
 * @returns {Array} Array with nu falsy values
 */
const compact = (x) => x.filter((x) => !!x);
/**
 *This function returns the last item in an array
 * @param {Array} x Array to return last item
 * @returns {*} last item in array
 */
const lastIndex = (x) => x[x.length - 1];
/**
 *This function flattens an array
 * @param {Array} x Array to flatten
 * @returns {Array} Flattend array
 */
const flatten = (x, y = Infinity) => x.flat(y);
/**
 *This function return an item at the provided index
 * @param {Array} x Array to return item
 * @param {number} y positive or negative index
 * @returns {*} Item at the provided index
 */
const nth = (x, y) => (y < 0 ? x[x.length + y] : x[y]);
/**
 *This function removes the provided values from the provided array
 * @param {Array} x Array to remove values from
 * @param {...*} y Values to remove
 * @returns {Array} Array with nu falsy values
 */
const pull = (x, ...y) => {
	y.forEach((a) => (x = x.filter((z) => z != a)));
	return x;
};
/**
 *This function removes the last element from an array
 * @param {Array} x Array to remove last element
 * @returns {Array} Array without last value
 */
const head = (x) => x.filter((a, b) => b != x.length - 1);
/**
 *This function removes the first element from an array
 * @param {Array} x Array to remove first element
 * @returns {Array} Array without first value
 */
const tail = (x) => x.filter((a, b) => b != 0);
/**
 * this function dynamically creates variables
 * @param {String} name
 * @param {number} amount
 * @param {String|Array=} value
 */
const createVars = (name, amount, value = 'unspecified') => {
	let variables = [];
	for (let i = 0; i !== amount; i++) {
		if (typeof value !== 'object' || value == null) {
			eval(`${name}${i} = '${value}'`);
			variables.push(name + i);
		} else {
			eval(`${name}${i} = '${value[i]}'`);
			variables.push(name + i);
		}
	}
	return variables;
};
/**
 *This function merges arrays to 1 array without duplicates
 * @param {...Array} x Arrays to merge
 * @returns {Array} single array without duplicates
 */
const union = (...x) => [...new Set(x.flat(Infinity))];
/**
 *This function merges arrays to 1 array without duplicates and sorts the values
 * @param {...Array} x Arrays to merge and sort
 * @returns {Array} single sorted array without duplicates
 */
const sortedUnion = (...x) => union(x).sort();
/**
 *This function deepcopies an array
 * @param {Array} x Array to deepCopy
 * @returns {Array} deepcopied array
 */
const deepCopy = (x) => JSON.parse(JSON.stringify(x));
/**
 * i don't know how to explain this
 * @param {number} min lower bound
 * @param {number} num value
 * @param {number} max upper bound
 */
const clamp = (min, num, max) => (num <= min ? min : num >= max ? max : num);
/**
 *This function returns an array you can iterate over (like range in python)
 * @param {number} x length of array
 * @returns {Array} array you can iterate over
 */
const range = (x) => [...Array(x).keys()];
/**
 *This function converts a string to camelCase
 * @param {string} x string to convert
 * @returns {string} converted string
 */
const camelCase = (s) => {
	return s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
/**
 *This function converts a string to PascalCase
 * @param {string} x string to convert
 * @returns {string} converted string
 */
const pascalCase = (s) => [...camelCase(s).split('')[0].toUpperCase(), ...tail(camelCase(s).split(''))].join('');
/**
 *This function converts a string to snake_case
 * @param {string} x string to convert
 * @returns {string} converted string
 */
const snakeCase = (s) =>
	s
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map((x) => x.toLowerCase())
		.join('_');
/**
 *This function converts a string to kebab-case
 * @param {string} x string to convert
 * @returns {string} converted string
 */
const kebabCase = (s) => snakeCase(s).replace(/_/g, '-');
/**
 *This function Capitalizes a string
 * @param {string} x string to convert
 * @returns {string} converted string
 */
const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

module.exports = {
	isInt,
	isFloat,
	isString,
	isArray,
	round,
	removeDuplicates,
	compact,
	lastIndex,
	flatten,
	nth,
	pull,
	tail,
	head,
	createVars,
	union,
	sortedUnion,
	deepCopy,
	clamp,
	range,
	camelCase,
	pascalCase,
	snakeCase,
	kebabCase,
	capitalize,
	charCount,
	spaceCount,
	removeVowels,
	keepVowels,
	sortNumsAscending,
	sortNumsDescending,
	sortByLetter,
	sortByLongestLength,
	sortByShortestLength,
	checker,
	randomElement,
};
