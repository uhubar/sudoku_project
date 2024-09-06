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
  return allVariants;
}


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(arr) {
  console.log(" ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★");
  arr.forEach((el) => console.log(" | " + el.join(" | ") + " | "));
  console.log(" ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★");
}


module.exports = { read, prettyBoard }