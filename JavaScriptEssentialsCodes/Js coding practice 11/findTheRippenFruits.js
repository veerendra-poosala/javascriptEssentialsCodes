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
  const fruits = JSON.parse(readLine().replace(/'/g,'"'));

  const haveRipenFruit = fruits.some((fruit)=>{
      if(fruit.state === 'ripen'){
          return true;
      }else{
          return false;
      }
  });
  if(haveRipenFruit){
      console.log("Yes");
  }else{
      console.log("No");
  }
}
