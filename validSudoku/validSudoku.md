# Valid Sudoku

[1]: https://leetcode.com/problems/valid-sudoku/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]
Output: true
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
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
```
