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
  const userInput = parseInt(readLine());
  const correctPin = 9372;

  let validateUserPinPromise = new Promise((resolve,reject)=>
  {
     if(userInput === correctPin){
         return resolve("Success");
     } else{
         return reject("Please enter valid pin");
     }
  });
  
  validateUserPinPromise.then((response)=>{
      console.log(response);
  }).catch((errorMsg)=>{
      console.log(errorMsg);
  })
}
