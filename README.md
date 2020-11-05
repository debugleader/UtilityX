# ❗❕ What is this? ❕❗

**UtilityX** makes _JavaScript_ easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
**UtilityX’s** modular methods are great for:

1. Iterating arrays, objects, & strings.. :heart_eyes:
2. Manipulating & testing values.. :smirk:
3. Creating composite functions.. :sunglasses:
4. And many more cool things! :wink:

---

> [![forthebadge](https://forthebadge.com/images/badges/powered-by-responsibility.svg)](https://debugleader.github.io)

---

# A letter of Appreciation ❣

**A huuugeee Thanks to [Dark-error-Honor](https://github.com/Dark-error-Honor) for helping me create UtilityX!**

---

> [![forthebadge](https://forthebadge.com/images/badges/uses-brains.svg)](https://debugleader.github.io)

---

# How can I use this? 🤔

<details>
  <summary>Installation ⚙</summary>
  <hr />
  
  ```bash
  > npm i utilityx
  ```
  ```bash
  > const x = require("utilityx");
  ```
  <hr />
  </details>
  <details>
  <summary>Docs ✔</summary>
    <hr />
    
  <details>
  <summary>Check For Integers 🔢</summary>
  <br />
  
  ```javascript
    x.isInt(1);
    // => true

````
</details>
      <!-- New details-->
<details>
<summary>Check For Floats 💥</summary>
<br />

```javascript
  x.isFloat(1.1);
  // => true

````

  </details>
    <!-- New details-->
  <details>
  <summary>Check For Strings 🔠</summary>
  <br />
  
  ```javascript
    x.isString('Hello World!');
    // => true

````
</details>
  <!-- New details-->
<details>
<summary>Check For Arrays ✔</summary>
<br />

```javascript
  x.isArray(['Hello', 'World', '!']);
  // => true

````

  </details>
  <!-- New details-->
  <details>
  <summary>Round Numbers ⭕</summary>
  <br />
  
  ```javascript
    // parameters: (number, amount of decimal places)
    x.round(10.55555555, 2)
    // => 10.56

````
</details>

  <!-- New details-->
  <details>
  <summary>Remove duplicates from array ❌</summary>
  <br />

  ```javascript
    // parameters: (array)
    x.removeDuplicates([1, 2, 3, 4, 2, 3])
    // => [1, 2, 3, 4]

````

</details>

  <!-- New details-->
  <details>
  <summary>Remove null values from array ❌</summary>
  <br />

```javascript
// parameters: (array)
x.compact([null, '', undefined, 0, 5, 'hello']);
// => [5, 'hello']
```

</details>

  <!-- New details-->
  <details>
  <summary>Get last index of array 💢</summary>
  <br />

```javascript
// parameters: (array)
x.lastIndex([1, 2, 3, 4, 'Hi']);
// => 'Hi'
```

</details>

  <!-- New details-->
  <details>
  <summary>Flatten an array ➡⬅</summary>
  <br />

```javascript
// parameters: (array, depth to flatten(Number))
x.flatten([1, [2, [3, [4, [5]]]]]);
// => [1, 2, 3, 4, 5]
```

</details>

  <!-- New details-->
  <details>
  <summary>positive and negative indexing ➖</summary>
  <br />

```javascript
// parameters: (array, index(negative or positive Number))
x.nth(['first', 'second', 'third'], -2);
// => 'second'
```

</details>

  <!-- New details-->
  <details>
  <summary>Pull items out of array ⬆</summary>
  <br />

```javascript
// parameters: (array, values to pull out)
x.pull([1, 2, 3, 'hello', 4], 1, 'hello');
// => [1, 2, 3, 4]
```

</details>

  <!-- New details-->
  <details>
  <summary>Get all items except last item ❌</summary>
  <br />

```javascript
// parameters: (array)
x.head([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4]
```

</details>

  <!-- New details-->
  <details>
  <summary>Get all items except first item 🚫</summary>
  <br />

```javascript
// parameters: (array)
x.removeDuplicates([1, 2, 3, 4, 5]);
// => [2, 3, 4, 5]
```

</details>

  <!-- New details-->
  <details>
  <summary>Dynamicaly create variables 😎</summary>
  <br />

```javascript
// parameters: (name, amount, value(array or single value) default= unspecified)
fruits = ['apple', 'lemon', 'mango', 'pear'];
x.createVars('fruit', fruits.lenth, fruits);
// => ['fruit0', 'fruit1', 'fruit2', 'fruit3']
console.log(fruit0, fruit1);
// 'apple lemon'
```

</details>

  <!-- New details-->
  <details>
  <summary>Make union of arrays ☮</summary>
  <br />

```javascript
// parameters: (array, array, array, ...)
x.union([1, 2, 3, 4, 5], [1, 2], [3, 6]);
// => [1, 2, 3, 4, 5, 6]
```

</details>
  <!-- New details-->
  <details>
  <summary>Make sorted union of arrays ☮</summary>
  <br />

```javascript
// parameters: (array, array, array, ...)
x.sortedUnion([5, 2, 4], [6, 4, 9]);
// => [2, 4, 5, 6, 9]
```

</details>
  <!-- New details-->
  <details>
  <summary>Deep copy an array ©</summary>
  <br />

```javascript
// parameters: (array)
arr = [1, 2, 3];
x.deepCopy(arr);
// => [1, 2, 3]
```

</details>
  <!-- New details-->
  <details>
  <summary>Clamp function 🍤</summary>
  <br />

```javascript
// parameters: (lower bound, number, upper bound)
x.clamp([2, 5, 8]);
// => 5
x.clamp([8, 2, 10]);
// => 8
x.clamp([2, 10, 5]);
// => 5
```

</details>
  <!-- New details-->
  <details>
  <summary>Range function (yes, like in python) 🐍</summary>
  <br />

```javascript
// parameters: (Number)
x.range(5);
// => [0, 1, 2, 3, 4]
```

</details>
  <!-- New details-->
  <details>
  <summary>Convert to camelCase 🐫</summary>
  <br />

```javascript
// parameters: (String)
x.camelCase('caMel caSe');
// => 'camelCase'
```

</details>
<!-- New details-->
  <details>
  <summary>Convert to PascalCase 🔠</summary>
  <br />

```javascript
// parameters: (String)
x.pascalCase('paScAl caSe');
// => 'PascalCase'
```

</details>
<!-- New details-->
  <details>
  <summary>Convert to snake_case 🐍</summary>
  <br />

```javascript
// parameters: (String)
x.snakeCase('snAke caSe');
// => 'sn_ake_cas_e'
x.snakeCase('snake case');
// => 'snake_case'
```

</details>
<!-- New details-->
  <details>
  <summary>Convert to kebab-case 🥙</summary>
  <br />

```javascript
// parameters: (String)
x.kebabCase('keBab caSe');
// => 'ke-bab-ca-se'
x.kebabCase('kebab case');
// => 'kebab-case'
```

</details>
<!-- New details-->
  <details>
  <summary>Capitalize</summary>
  <br />

```javascript
// parameters: (String)
x.camelCase('caPs');
// => 'CaPs'
```

</details>

</details>

---

> [![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://debugleader.github.io)

---

# Why use UtilityX? 🚀

**UtilityX** helps programmers write more concise and easier to maintain JavaScript code. **UtilityX** contains tools to simplify programming with strings, numbers, arrays, functions and obfljects. By convention, **UtilityX** module is mapped to the x character.

---

> [![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://debugleader.github.io)

---

# Is it tested? 🧪

Tested in **Chrome 74-75**, **Firefox 66-67**, **IE 11**, **Edge 18**, **Safari 11-12**, & **Node.js 8-12**.

---

> [![forthebadge](https://forthebadge.com/images/badges/certified-yourboyserge.svg)](https://debugleader.github.io)

---

# How can I contribute? 🎉

Please read this [document](CONTRIBUTING.md) before contributing to **UtilityX**! All bug fixes, improvements are appreciated ♥

---

> [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://debugleader.github.io)

---

# Did you find an issue? ⚠️

**Please read [this document.](SECURITY.md)**

---

> [![forthebadge](https://forthebadge.com/images/badges/not-an-issue.svg)](https://debugleader.github.io)

---

# What about the license? 📃

**UtilityX** is released under the _MIT_ license & supports modern environments.

---

> <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" width="600">

---

> [![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://debugleader.github.io)

---

> [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://debugleader.github.io)

---
