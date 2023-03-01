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

function main() {
  let numbersArray = JSON.parse(readLine());

/* Please do not modify anything above this line */

let [num1,num2,...rest] = numbersArray;
//console.log(rest);
let sum = 0;
for (let eachItem of rest ){
    sum += eachItem;
}
console.log(sum);
}
