/*
 * @Author: shaoyun
 * @Date: 2019-09-15 20:12:25
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-15 20:40:07
 * @Description: 组合总和II——不可重复取值
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // 数组要排序
    candidates.sort((a, b) => (a - b))
    var res = []
    var path = []
    getNum(0, candidates, target, path)

    function getNum (start, candidates, target, path) {
      if (target < 0) return
      if (target === 0) {
        path = path.slice() // 数组是引用类型，必须复制，否则就是[]
        res.push(path)
        return
      }
      for (let i = start;i < candidates.length;i++) {
        if (target > 0) {
          if (i > start && candidates[i] === candidates[i - 1]) continue // 去重
          path.push(candidates[i])
          getNum(i + 1, candidates, target- candidates[i], path)
          path.pop()
        }
      }
    }
    return res
};
