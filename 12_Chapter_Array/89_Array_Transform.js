let score=[45,82,91,60,73];
let grade=score.map(i=>i>70?"pass":"fail");
console.log(grade); // ["fail","pass","pass","fail","pass"]

let passing=score.filter(i=>i>70);
console.log(passing); // [82,91,73]