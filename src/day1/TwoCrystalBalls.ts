let floors = 65
let idx = Math.floor(Math.random() * floors);
// let idx = 65
// let idx = 0
const data = new Array(floors).fill(false);
for (let i = idx; i < floors; ++i) {
  data[i] = true;
}
// console.log("Target:",idx)
// console.log("")
// console.log(data.map(x => { if (x) return "."; else return "*";}).join(""))

// two_crystal_balls(new Array(floors).fill(false))
// two_crystal_balls(data)
// two_crystal_balls(data, "binary")
// two_crystal_balls(data, "quarters")
// two_crystal_balls(data, "tenths")
// two_crystal_balls(data, "sqrt")
// two_crystal_balls(data, "cbrt")



export default function two_crystal_balls(breaks: boolean[], jmpAmountFunc:String = "sqrt"): number {

  let jmpAmount = 0
  switch(jmpAmountFunc) {
    case "sqrt":     jmpAmount = Math.floor(Math.sqrt(breaks.length)); break;
    case "cbrt":     jmpAmount = Math.floor(Math.cbrt(breaks.length)); break;
    case "binary":   jmpAmount = Math.floor(breaks.length/2); break;
    case "quarters": jmpAmount = Math.floor(breaks.length/4); break;
    case "tenths":   jmpAmount = Math.floor(breaks.length/10); break;
  }

  let found = false;
  let numJumps = 0;
  let i = jmpAmount;

  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i-1]) {
      console.log((".".repeat(jmpAmount-1) + "|").repeat(numJumps));
      found = true;
      break;
    }
    numJumps++;
  }

  if (!found) {
    console.log((".".repeat(jmpAmount-1) + "|").repeat(numJumps));
  }

  let numSteps = 0;
  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      process.stdout.moveCursor(i - j, -1);
      if (numSteps) {
        process.stdout.write("=".repeat(numSteps));
      }
      console.log(" ", [numJumps+numSteps, jmpAmountFunc])
      return i;
    }
    numSteps++;
  }

  process.stdout.moveCursor(i-1, -1);
  console.log(" ",["Intact"])
  return -1;
}

