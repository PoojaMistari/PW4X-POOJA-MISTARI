// Regular Expressions (Regex)
// A regex is a pattern used to search, validate, or replace text.
// In JavaScript, write a regex literal between forward slashes: /pattern/.

let url = "https://staging.vwo.com/api/login?retry=true";

// test() returns true if the pattern is found in the string
console.log(/staging/.test(url)); // true
console.log(/production/.test(url)); // false

// match() returns the text that matches the pattern
console.log(url.match(/api\/\w+/)); // ["api/login"]

// Common regex patterns:
// \d      any digit
// \w      any letter, digit, or underscore
// +       one or more
// *       zero or more
// ^       start of string
// $       end of string

// Match either retry=true or retry=false
console.log(/retry=(true|false)/.test(url)); // true

// replace() can replace text matched by a regex
console.log(url.replace(/staging/, "production"));

// Notes:
// - Regex patterns are case-sensitive by default. Use the i flag to ignore case: /staging/i.
// - Use the g flag to find or replace every match: /a/g.
// - A backslash escapes special characters. For example, \/ matches a literal slash.
// - test() is useful for checking if text matches; match() retrieves matching text;
//   replace() returns a new string with matching text replaced.
// - Regex patterns can be built with RegExp when the pattern comes from a variable:
let word = "login";
let pattern = new RegExp(word);
console.log(pattern.test(url)); // true
