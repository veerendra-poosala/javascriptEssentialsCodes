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
  const min = parseInt(readLine());
  const max = parseInt(readLine());
  const words = JSON.parse(readLine().replace(/'/g,'"'));

  const lengthsOfWords = words.map((word)=>word.length);
  //console.log(lengthsOfWords);
  const isValidWords = words.every((word)=>{
      let num = word.length;
      if(num>=min && num<= max){
          return true;
      }else{
          return false;
      }
  });
  console.log(isValidWords)
}
