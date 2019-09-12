/*
 * @Author: shaoyun
 * @Date: 2019-09-12 20:49:59
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-12 21:31:45
 * @Description: 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var boxs = [],rows = [],cols = []
  for (let i = 0;i < 9;i++) {
    boxs[i] = new Set()
    rows[i] = new Set()
    cols[i] = new Set()
  }
  for (let i = 0;i < 9;i++) {
    for (let j = 0;j < 9;j++) {
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (board[i][j] !== '.') {
        if (rows[i].has(board[i][j])) {
          return false
        } else {
          rows[i].add(board[i][j])
        }
        if (cols[j].has(board[i][j])) {
          return false
        } else {
          cols[j].add(board[i][j])
        }
        if (boxs[boxIndex].has(board[i][j])) {
          return false
        } else {
          boxs[boxIndex].add(board[i][j])
        }
      }
    }
  }
  return true
};
