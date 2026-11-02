//   *
//  ***
// *****

let n=5;
for(let i=0;i<=n;i++){
    for(let j=0;j<n-i;j++){ 
        process.stdout.write(" ");
    }
    for(let k=0;k<2*i-1;k++){
        process.stdout.write("*");
    }
    console.log("");
}
// let n = 3;

// for(let i=1;i<=n;i++){
//         let row = "";
//         for(let j=1;j<=n-i;j++){
//                row += " ";
//         }
//         for(let j=1;j<=2*i-1;j++){
//             row = row + "*";
//         }
//         console.log(row);
// }