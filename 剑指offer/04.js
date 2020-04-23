/**
 * @description: 二维数组中查找是否有值
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false
  }

  let row = 0
  let col = matrix[0].length - 1

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col --
    } else if (matrix[row][col] < target) {
      row ++
    } else {
      return true
    }
  }
  return false
};