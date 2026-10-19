let arr=[10,20,30,40];
console.log(arr);

arr.push(50);
console.log(arr);

arr.pop();
console.log(arr);   

arr.unshift(5);
console.log(arr);

arr.shift();    
console.log(arr);

arr.splice(1,2); // remove 2 elements from index 1
console.log(arr);   

arr.splice(1,0,15,25); // add 15 and 25 at index 1
console.log(arr);

arr.splice(1,1,12); // replace 1 element at index 1 with 12
console.log(arr);

arr.splice(1,2,100,200); // replace 2 elements at index 1 with 100 and 200
console.log(arr);