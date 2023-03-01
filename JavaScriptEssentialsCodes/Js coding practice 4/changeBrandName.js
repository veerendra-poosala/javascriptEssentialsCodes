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

function Company(brandName) {
  this.brandName = brandName;
  this.updateBrandName = function(newBrandName){
    this.brandName = newBrandName;  
  };
}

/* Please do not modify anything below this line */

function main() {
  const proposedBrandName  = readLine();

  const company1 = new Company("Blue Royal");"use strict";

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

function createPersonAddress(city, state) {
  return {
    city,
    state,
    updateAddress:function(currentCity,currentState){
        this.city=currentCity,
        this.state=currentState;
    }
  };
}

/* Please do not modify anything below this line */

function main() {
  const currentCity = readLine();
  const currentState = readLine();
  
  const personAddress = createPersonAddress("Mumbai", "Maharashtra");
  personAddress.updateAddress(currentCity, currentState);

  console.log(`${personAddress.city} ${personAddress.state}`);
}

  company1.updateBrandName(proposedBrandName);
  
  console.log(company1.brandName);   
}
