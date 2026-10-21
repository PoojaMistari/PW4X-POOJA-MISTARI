let num=[45,82,91,60,73];
console.log(num);
num.sort();
console.log(num);//natural sorting is done by converting the elements into strings and comparing their sequences of UTF-16 code units values.   
//lexicographical order is done by comparing the elements based on their character codes.

let n=[11,-11]; 
console.log(n.sort()); // [-11,11]  //lexicographical order is done by comparing the elements based on their character codes.