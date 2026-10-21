# Why `arr.slice(-4, -9)` Returns an Empty Array

Given:

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(-4, -9)); // []
```

`slice(start, end)` copies elements starting at `start` up to, but not including, `end`. Negative indexes count backward from the end of the array:

- `-4` refers to index `5` (the value `6`).
- `-9` refers to index `0` (the value `1`).

So this is equivalent to `arr.slice(5, 0)`. Since the end index (`0`) is before the start index (`5`), there are no elements to copy, and `slice()` returns an empty array. `slice()` does not reverse the array when the indexes are in descending order.

To get the last four elements, use:

```js
arr.slice(-4); // [6, 7, 8, 9]
```