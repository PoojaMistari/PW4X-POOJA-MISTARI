let num=[3,4,5];
let num2=num.slice();
console.log(num); // creates a shallow copy of the array    
num2.push(6);
console.log(num2);    
//copy
let num3=[...num]; // creates a shallow copy of the array using spread operator
console.log(num2);
    