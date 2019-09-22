/*
 * @Author: shaoyun
 * @Date: 2019-09-22 09:37:00
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-22 10:11:40
 * @Description: 全排列II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => (a - b)) // 数组排序，为了去重剪枝
  var len = nums.length
  var curSize = 0, visited = [], path = [], res = []
  dfs (nums, curSize, visited, path)
  return res

  function dfs(nums, curSize, visited, path) {
    if (curSize === len) {
      path = path.slice()
      res.push(path)
      return
    }

    for (let i = 0;i < len;i++) {
      if (visited[i]) { // 说明这个位置
        continue
      }
      // 前一个数与当前数相等，且前一个数没用过，这时要跳过，否则会重复
      if (i > 0 && nums[i - 1] === nums[i] && visited[i - 1] == false) {
        continue
      }
      path.push(nums[i])
      visited[i] = true
      dfs(nums, curSize + 1, visited, path)
      path.pop()
      visited[i] = false
    }
    return res
  }
};
