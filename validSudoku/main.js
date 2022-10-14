var isValidSudoku = function (board) {
  const rows = checkRows(board)
  const cols = checkCols(board)
  const squares = checkSquares(board)
  return rows + cols + squares === 0
}

const checkSquares = (b) => {
  let output = 0
  for (let i = 0; i < 9; i++) {
    let numsInSquare = []
    for (let j = 0; j < 9; j++) {
      const squareNum = b[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
      if (squareNum !== '.' && numsInSquare.includes(squareNum)) {
        return 1
      } else if (squareNum !== '.') {
        numsInSquare.push(squareNum)
      }
    }
  }
  return output
}

const checkRows = (b) => {
  let output = 0
  for (let i = 0; i < b.length; i++) {
    let numsInRow = []
    for (let j = 0; j < b[i].length; j++) {
      const rowNum = b[i][j]
      if (numsInRow.includes(rowNum) && rowNum !== '.') {
        console.log('includes row', rowNum)
        return 1
      } else if (rowNum !== '.') {
        numsInRow.push(rowNum)
      }
    }
  }
  return output
}

const checkCols = (b) => {
  let output = 0
  for (let i = 0; i < b.length; i++) {
    let numsInCols = []
    for (let j = 0; j < b[i].length; j++) {
      const colNum = b[j][i]
      if (numsInCols.includes(colNum) && colNum !== '.') {
        return 1
      } else if (colNum !== '.') {
        numsInCols.push(colNum)
      }
    }
  }
  return output
}
