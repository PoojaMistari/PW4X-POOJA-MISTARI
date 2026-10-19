let browser=["chrome","firefox","safari","opera","edge"];   
console.log(browser);

browser.pop(); // removes last element
console.log(browser);

let remove=browser.shift(); // removes first element
console.log(browser);
console.log(remove);    

for(let i=0;i<browser.length;i++){
    console.log(browser[i]);
    if(browser[i]==="safari"){
        console.log("safari is found");
    }
}