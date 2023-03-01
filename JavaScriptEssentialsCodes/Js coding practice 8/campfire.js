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
  const isSticksFound = JSON.parse(readLine());
  const isLighterFound = JSON.parse(readLine());

  const sticksGathered = new Promise((resolve,reject)=>{
      if(isSticksFound){
          resolve("Sticks Gathered");
      }else{
          reject("Sticks Not Found");
      }
  });
  const sticksArranged = new Promise((resolve,reject)=>{
      if(isSticksFound){
          resolve("Sticks Arranged");
      }
  });
  const lightTheCampFire = new Promise((resolve,reject)=>{
      if(isLighterFound && isSticksFound){
          resolve("Campfire Lighted");
      }else{
          reject("Lighter Not Found");
      }
  });
  
  const campfire = async()=>{
      try{
      let gatherSticks = await sticksGathered;
      console.log(gatherSticks);
      let arrangeSticks = await sticksArranged;
      console.log(arrangeSticks);
      let light = await lightTheCampFire;
      console.log(light);
      }catch(errorMsg){
          console.log(errorMsg);
      }
  };
  
  campfire();
}
