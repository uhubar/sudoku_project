const fs = require("fs");
const { EOL } = require("os");

function read() {
  const newText = fs.readFileSync("puzzles.txt", "utf-8");
  const newTextArr = newText.split(EOL);
  let allVariants = [];
  for (let i = 0; i < newTextArr.length; i++) {
    let subarray = [];
    let size = 9;
    for (let k = 0; k < newTextArr[i].length; k += size) {
      const row = newTextArr[i].slice(k, k + size);
      subarray.push(row.split(""));
    }
    allVariants.push(subarray);
  }
  return allVariants[0];
}
const getArrPuzzle = read();

function solve(getArrPuzzle, row, col, k) {
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (getArrPuzzle[row][i] == k || getArrPuzzle[i][col] == k || getArrPuzzle[m][n] == k) {
        return false;
      }
  }
  return true;
}

function isSolved(getArrPuzzle) {
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (getArrPuzzle[i][j] == '-') {
      for (let k = 1; k <= 9; k++) {
        if (solve(getArrPuzzle, i, j, k)) {
          getArrPuzzle[i][j] = `${k}`;
        if (isSolved(getArrPuzzle)) {
         return true;
        } else {
          getArrPuzzle[i][j] = '-';
        }
       }
     }
     return false;
   }
 }
}
return true;
}
isSolved(getArrPuzzle);
console.log(getArrPuzzle);

function prettyBoard(arr) {
  console.table(" -------------------------------------");
  arr.forEach((el) => console.table(" | " + el.join(" | ") + " | "));
  return(" -------------------------------------");
}
console.table(prettyBoard(getArrPuzzle));

