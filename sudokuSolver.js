const gloBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
const row1 = gloBoard[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const row2 = gloBoard[1] = [9,3,0,0,5,0,6,8,0];
const row3 = gloBoard[2] = [0,0,0,0,0,9,0,0,3];
const row4 = gloBoard[3] = [3,0,0,0,9,0,1,4,0];
const row5 = gloBoard[4] = [1, 0, 0, 0, 0, 4, 0, 5, 0];
const row6 = gloBoard[5] = [0,0,0,0,7,6,0,0,0];
const row7 = gloBoard[6] = [0,0,0,2,0,0,5,0,0];
const row8 = gloBoard[7] = [0,0,4,0,0,3,2,0,7];
const row9 = gloBoard[8] = [0,8,0,9,0,0,0,0,0];

function isEmpty(board, row, column) {
  if (board[row][column] === 0) {
    return true;
  } else {return false};
}

function isValid(board, row, column, number) {
  let rowValid = true;
  let colValid = true;
  let boxValid = true;
  if (board[row].includes(number)) {rowValid = false;};
  for (let row = 0; row < 9; row++) {
    if (board[row][column] === number) {
      colValid = false;
      break;
    };
  }
  const boxRowStart = Math.floor(row / 3) * 3
  const boxColStart = Math.floor(column / 3) * 3;
  for (let r = boxRowStart; r < (boxRowStart + 3); r++) {
    for (let c = boxColStart; c < (boxColStart + 3); c++) {
      if (board[r][c] === number) {boxValid = false;
                                  break;}
    }
  };
  return rowValid && colValid && boxValid;
}

function solve(b) {
  for (let rowSolve = 0; rowSolve < 9; rowSolve++) {
    for (let colSolve = 0; colSolve < 9; colSolve++) {
      if (isEmpty(b, rowSolve, colSolve)) {
        for (let guess = 1; guess <= 9; guess++) {
          if (isValid(b, rowSolve, colSolve, guess)) {
              b[rowSolve][colSolve] = guess;
              if (solve(b)) {return true;} else {b[rowSolve][colSolve] = 0;}
              }
        };
        return false;
      }
  }
  }
  return true;
}
  

console.log(gloBoard);
console.log(solve(gloBoard));
console.log(gloBoard);