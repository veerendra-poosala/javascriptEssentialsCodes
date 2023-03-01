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

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.printName = function(){
      return `${firstName} ${lastName}`
  }
}

function main() {
  const firstName = readLine();
  const lastName = readLine();
 
  let person1 = new Person(firstName,lastName);
  console.log(person1.printName());
}
