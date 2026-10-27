let num=[10,1,21,2];
num.sort((a,b)=>a-b);
console.log(num); // [1,2,10,21]  //ascending order is done by comparing the elements based on their character codes.
num.sort((a,b)=>b-a);
console.log(num); // [21,10,2,1]  //descending order is done by comparing the elements based on their character codes.


let fruits=["apple","date","cherry","banana"];
fruits.sort((a,b)=>a.localeCompare(b));
console.log(fruits); // ["apple", "banana", "cherry", "date"]  //ascending order is done by comparing the elements based on their locale-specific string values.

