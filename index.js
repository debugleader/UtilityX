const charCount = (s, y) => (s.match(new RegExp(y, "g")) || []).length;
const spaceCount = (s) => [...s].filter((x) => x === " ").length;
const removeVowels = (s) => s.replace(/[aeiou]/gi, "");
const keepVowels = (s) => s.replace(/[^aeiou]/gi, "");
const sortNumsAscending = (x) => (x || []).sort((a, b) => a - b);
const sortNumsDescending = (x) => (x || []).sort((a, b) => b - a);
const sortByLetter = (x) => x.sort();
const sortByShortestLength = (x) => x.sort((a, b) => a.length - b.length);
const sortByLongestLength = (x) => x.sort((a, b) => b.length - a.length);
const checker = (x) => x.every((y, i, a) => y === a[0] && y !== null);
const randomElement = (x) => x[Math.floor(Math.random() * x.length)];
const isInt = (n) => !(n % 1);
const isFloat = (n) => !!(n % 1);
const isString = (s) => typeof s === "string";
const isArray = (a) => Array.isArray(a);
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
const createVars = (name, amount, value = "unspecified") => {
  let variables = [];
  for (let i = 0; i !== amount; i++) {
    if (typeof value !== "object" || value == null) {
      eval(`${name}${i} = '${value}'`);
      variables.push(name + i);
    } else {
      eval(`${name}${i} = '${value[i]}'`);
      variables.push(name + i);
    }
  }
  return variables;
};
const union = (...x) => [...new Set(x.flat(Infinity))];
const sortedUnion = (x) => union(x).sort();
const deepCopy = (x) => JSON.parse(JSON.stringify(x));
const clamp = (min, num, max) => (num <= min ? min : num >= max ? max : num);
const range = (x) => [...Array(x).keys()];
const camelCase = (s) => {
  return s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
const pascalCase = (s) =>
  [
    ...camelCase(s).split("")[0].toUpperCase(),
    ...tail(camelCase(s).split("")),
  ].join("");
const snakeCase = (s) =>
  s
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");
const kebabCase = (s) => snakeCase(s).replace(/_/g, "-");
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
