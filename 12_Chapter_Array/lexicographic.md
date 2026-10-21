# Lexicographic Order

Lexicographic order is the order used in a dictionary. Compare two strings from left to right:

1. Find the first position where their characters differ.
2. The string with the earlier character at that position comes first.
3. If one string is a prefix of the other, the shorter string comes first. For example, `"app"` comes before `"apple"`.

## JavaScript array sorting

By default, JavaScript's `sort()` converts array elements to strings and compares them lexicographically:

```js
const values = [10, 1, 21, 2];
values.sort();
console.log(values); // [1, 10, 2, 21]
```

Here, `"10"` comes before `"2"` because its first character, `"1"`, comes before `"2"`. For numeric ascending order, provide a comparator:

```js
const numbers = [10, 1, 21, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 10, 21]
```