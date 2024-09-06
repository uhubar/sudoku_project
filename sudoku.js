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

function solve() {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
}
return true;
}

function isSolved(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '-') {
        for (let k = 1; k <= 9; k++) {
          if (solve(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (isSolved(data)) {
           return true;
          } else {
           data[i][j] = '-';
          }
         }
       }
       return false;
     }
   }
  }
  return true;
}

function prettyBoard(arr) {
  console.log(" ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★");
  arr.forEach((el) => console.log(" | " + el.join(" | ") + " | "));
  console.log(" ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★");
}

isSolved(read());
console.log(read());
console.log(prettyBoard(board));
