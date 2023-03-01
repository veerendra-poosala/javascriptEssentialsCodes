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

class Aircraft {
  constructor() {
    this.flying = false;
  }

  takeOff() {
    this.flying = true;
  }

  land() {
    this.flying = false;
  }
}

class FighterJet extends Aircraft {

  constructor(missilesLoaded,missilesFired){
      super();
      this.missilesFired = missilesFired;
      this.missilesLoaded = missilesLoaded;
      this.missiles = 0;
      
  }
  fireMissiles(){
      this.missilesLoaded -= this.missilesFired ;
      this.missiles = this.missilesLoaded;
      console.log(`${this.missilesFired} Missiles Fired`);
  }

}

/* Please do not modify anything below this line */

function main() {
  const missilesLoaded = parseInt(readLine());
  const missilesFired = parseInt(readLine());  
  
  const fighterJet = new FighterJet(missilesLoaded, missilesFired);
  
  fighterJet.takeOff();
  fighterJet.fireMissiles();
  console.log(`${fighterJet.missiles} Missiles Left`);
  fighterJet.land();
}