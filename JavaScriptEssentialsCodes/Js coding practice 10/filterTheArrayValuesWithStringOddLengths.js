"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));

  const oddStringLengthArray = myArray.filter((element)=>element.length % 2===1);
  //console.log(oddStringLengthArray);
  const uppercaseStringsArray = oddStringLengthArray.map((element)=>{return element.toUpperCase()});
  console.log(...uppercaseStringsArray);
}
