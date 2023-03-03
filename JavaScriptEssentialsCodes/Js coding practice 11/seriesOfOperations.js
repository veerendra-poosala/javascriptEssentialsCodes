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
  const myArray = JSON.parse(readLine());

  const resultantArray = myArray.map((num)=>{
     let mulWith4 = num*-4;
     let addTen = mulWith4+10;
     let result = addTen*3 ;
     return result;
  });
  console.log(...resultantArray);
}
