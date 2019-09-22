/*
 * @Author: shaoyun
 * @Date: 2019-09-22 10:12:19
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-22 11:30:14
 * @Description: 旋转图像90°
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 先将矩阵转置
  for (let i = 0;i < matrix.length;i++) {
    for (let j = i;j < matrix[i].length;j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }

    // 再将每行翻转（逆序）
    matrix[i].reverse()
  }
};
