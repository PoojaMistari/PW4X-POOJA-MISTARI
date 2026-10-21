let a=[1,2];
let b=[3,4];    
let c=a.concat(b);
console.log(c); // [1,2,3,4]  //concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//spread operator(...) is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let d=[...a,...b];
console.log(d); // [1,2,3,4]  //spread operator(...) is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.