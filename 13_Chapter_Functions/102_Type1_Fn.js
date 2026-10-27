// Type 1 - No param / argument, No Return -> final retunr undefined.

function greet(){
    console.log("Hello, World!");
}
greet();
greet();
greet();

function openBrowser(){
    console.log("Opening Browser");
}
openBrowser();

let msg=greet();//undefined
console.log(msg);