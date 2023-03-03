"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const nestedArray = JSON.parse(readLine());

  const resultantArray = nestedArray.map((subArray)=>{
      let isValid = subArray.some((num)=>num%2===0);
      if(isValid){
          let total = subArray.reduce((sum,num)=>sum+num);
          return total;
      }else{
          return 0;
      }
  });
  console.log(resultantArray);
}
