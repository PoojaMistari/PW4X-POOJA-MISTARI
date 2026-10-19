//accessing and modifying array elements
const browser=["chrome","firefox","safari","opera","edge"];
console.log(browser[0]);    
console.log(browser.at(-1));
console.log(browser.at(-2));
console.log(browser.at(-7)); // undefined

//modifying array elements
browser[0]="brave";
console.log(browser); 