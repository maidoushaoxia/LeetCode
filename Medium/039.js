/*
 * @Author: shaoyun
 * @Date: 2019-09-14 21:14:07
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-14 21:41:56
 * @Description: 组合总和——回溯算法
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => (a - b))
    var res = []
    var path = []
    debugger
    getSum(0, candidates, target, path)

    function getSum (start, candidates, target, path) {
      if (target < 0) return // target小于0则直接返回

      if (target === 0) { // 达到目标，则保存当前路径
        path = path.slice()
        res.push(path)
        return
      }
      for (let i = start;i < candidates.length;i++) {
        path.push(candidates[i])
        getSum(i, candidates, target - candidates[i], path)
        path.pop() // 删除最后一个元素，这样才能进行其他支路的搜索
      }
    }
    return res
};
