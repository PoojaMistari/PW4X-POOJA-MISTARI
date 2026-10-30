# `charAt(i)` vs. `at(i)` in JavaScript

Both `charAt()` and `at()` return the character at a string index. JavaScript string indexes start at `0`.

```js
const text = "Hello";

console.log(text.charAt(1)); // "e"
console.log(text.at(1));     // "e"
```

## Main difference: negative indexes

`at()` accepts negative indexes, counting backward from the end of the string. `charAt()` does not.

```js
console.log(text.at(-1));     // "o" (last character)
console.log(text.charAt(-1)); // "" (empty string)
```

## Indexes outside the string

When an index is outside the string, `charAt()` returns an empty string (`""`), while `at()` returns `undefined`.

```js
console.log(text.charAt(10)); // ""
console.log(text.at(10));     // undefined
```

## Unicode note

Both methods index UTF-16 code units, not complete Unicode characters. Some characters, such as many emoji, use two code units, so either method may return only part of such a character.

To work with complete Unicode code points, use `Array.from()`:

```js
const emoji = "😊";

console.log(emoji.at(0));              // may display only part of the emoji
console.log(Array.from(emoji).at(0));  // "😊"
```

## Which one should you use?

- Use `at()` when you want negative indexes or an `undefined` result for an out-of-range index.
- Use `charAt()` when you specifically want its older behavior of returning `""` for a negative or out-of-range index.
- For modern code that needs the last character, `text.at(-1)` is concise and clear.
