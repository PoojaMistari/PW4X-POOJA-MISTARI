let tests=["login","checkout","search"];
for(let index=0;index<tests.length;index++){
    const element=tests[index];
    console.log(element);

}
for(let i=0;i<tests.length;i++){
    console.log(i,tests[i]);

}

for(let test of tests){
    console.log(test);
}
console.log("**********");
tests.forEach((test,index)=>{
    console.log(index,test);
});