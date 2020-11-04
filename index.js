// Checkers

const isInt = (n) => !(n % 1);
const isFloat = (n) => !!(n % 1);
const isString = (s) => typeof s === 'string';
const isArray = (a) => Array.isArray(a);

// Utils

const round = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
const removeDuplicates = (x) => [...new Set(x)];
const compact = (x) => x.filter((x) => !!x);
const lastIndex = (x) => x[x.length - 1];
const flatten = (x, y = Infinity) => x.flat(y);
const nth = (x, y) => (y < 0 ? x[x.length + y] : x[y]);
const pull = (x, ...y) => {
	y.forEach((a) => (x = x.filter((z) => z != a)));
	return x;
};
const head = (x) => x.filter((a, b) => b != x.length - 1);
const tail = (x) => x.filter((a, b) => b != 0);

const createVars = (name, amount, value = null) => {
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
};
