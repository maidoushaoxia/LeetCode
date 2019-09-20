/*
 * @Author: shaoyun
 * @Date: 2019-09-20 13:58:00
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-20 20:11:04
 * @Description: 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var len = nums.length
  var curSize = 0, res = [], path = []
  var visited = [] // 状态，false表示未使用的
  generatePermutation(nums, visited, curSize, path)
  return res

  function generatePermutation (nums, visited, curSize, path) {
    if (curSize === len) { // 已经成为一个排列，将当前路径添加到结果数组中，返回
      path = path.slice() // 很重要，必须用另一个变量保存路径数组，因为是内存地址引用
      res.push(path)
      return
    }
  
    for (let i = 0;i < len ;i++) {
      if (!visited[i]) {
        path.push(nums[i])
        visited[i] = true
        generatePermutation (nums, visited, curSize + 1, path)
        path.pop() // 状态重置
        visited[i] = false
      }
    }
    return res
  }
};
permute([1,2,3])
