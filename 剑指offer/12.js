/**
 * @description: 矩阵中的路径
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // 行数
  for (let i = 0; i < board.length; i++) {
    // 列数
    for (let j = 0;j < board[0].length; j++) {
      if (dfs(board, word, i, j, 0)) return true
    }
  }
  return false
};

/**
 * @description: 回溯
 * @param {character[][]} board
 * @param {string} word
 * @param {number} row
 * @param {number} col
 * @param {number} k 
 * @return {boolean}
 */
function dfs(board, word, row, col, k) {
  // 要先判断这个条件再判断下面的长度
  // 行、列越界，或当前元素与目标元素不同，或已访问
  if (row < 0 || row >= board.length ||
    col < 0 || col >= board[0].length ||
    board[row][col] !== word[k]
  ) return false

  // 字符全部匹配
  if (k === word.length - 1) return true

  const temp = board[row][col]
  board[row][col] = ''
  let res = dfs(board, word, row - 1, col, k + 1) || dfs(board, word, row + 1, col, k + 1) ||
    dfs(board, word, row, col - 1, k + 1) || dfs(board, word, row, col + 1, k + 1)
  board[row][col] = temp
  return res
}
