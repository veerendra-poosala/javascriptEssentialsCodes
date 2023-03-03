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
  const integers = JSON.parse(readLine());
  //console.log(integers);
  let sum=0;
  const total = integers.forEach((num,index)=>{
      if(index%2===0){
          sum+=num;
      }
      return sum;
  });
  let lengthOfArray = Math.ceil(integers.length/2);
  console.log(sum/lengthOfArray);
  /*
  const evenIndicesArray = integers.filter((number, index)=>index%2===0);
  //console.log(evenIndicesArray);
  const sum = evenIndicesArray.reduce((accumulate,currentElement)=>accumulate+currentElement);
  const arrayLength = Math.ceil(integers.length/2);
  const avg = sum/arrayLength;
  console.log(avg);
  */
}
