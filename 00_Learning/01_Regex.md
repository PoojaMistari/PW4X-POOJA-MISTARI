# Regular Expressions (Regex)

A regular expression (regex) is a pattern used to search, validate, or replace text. In JavaScript, a regex literal is written between forward slashes:

```js
/pattern/
```

## Searching with `test()`

`test()` returns `true` when the pattern is found in a string and `false` otherwise.

```js
const url = "https://staging.vwo.com/api/login?retry=true";

console.log(/staging/.test(url)); // true
console.log(/production/.test(url)); // false
```

## Getting a match with `match()`

`match()` returns the matching text (or `null` if there is no match).

```js
console.log(url.match(/api\/\w+/)); // ["api/login"]
```

The slash in `api/login` is escaped as `\/` because `/` also marks the beginning and end of a regex literal. The `\w+` pattern matches one or more word characters.

## Common pattern characters

| Pattern | Meaning |
| --- | --- |
| `\d` | Any digit |
| `\w` | Any letter, digit, or underscore |
| `+` | One or more of the preceding item |
| `*` | Zero or more of the preceding item |
| `^` | Start of the string |
| `$` | End of the string |
| `(a|b)` | Either `a` or `b` |

For example, this checks for either `retry=true` or `retry=false`:

```js
console.log(/retry=(true|false)/.test(url)); // true
```

## Replacing text with `replace()`

`replace()` returns a new string with matching text replaced.

```js
console.log(url.replace(/staging/, "production"));
// https://production.vwo.com/api/login?retry=true
```

## Flags

Flags are written after the closing slash of a regex literal:

- Regex patterns are case-sensitive by default. Use `i` to ignore case: `/staging/i`.
- Use `g` to find or replace every match: `/a/g`.

## Dynamic patterns with `RegExp`

Use the `RegExp` constructor when the pattern comes from a variable:

```js
const word = "login";
const pattern = new RegExp(word);
console.log(pattern.test(url)); // true
```

## Notes

- Use `test()` to check whether a string matches a pattern.
- Use `match()` to retrieve matching text.
- Use `replace()` to return a string with matching text replaced.
- A backslash escapes special characters. For example, `\/` matches a literal slash.
