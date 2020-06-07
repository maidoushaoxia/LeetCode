/**
 * @description 顺时针打印矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix.length) return []
  let left = 0,
  right = matrix[0].length - 1,
  up = 0,
  down = matrix.length - 1
  
  let res = []

  while(true) {
    // 从左向右
    for (let i = left; i <= right; i ++) {
      res.push(matrix[up][i])
    }
    if (++up > down) break

    // 从上到下
    for (let i = up; i <= down; i++) {
      res.push(matrix[i][right])
    }
    if (--right < left) break

    // 从右向左
    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i])
    }
    if (--down < up) break

    // 从下向上
    for (let i = down; i >= up; i--) {
      res.push(matrix[i][left])
    }
    if (++left > right) break
  }

  return res
};