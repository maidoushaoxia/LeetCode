/**
 * @description 字符串的排列
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let res = []
  let charArr = Array.from(s)
  dfs(0)
  return res

  /**
   * @description 回溯递归函数 
   * @param {string} x
   * @return {void}
   */  
  function dfs(x) {
    // 递归出口：遍历到最后一个字符时
    if (x === charArr.length - 1) {
      res.push(charArr.join(''))
    }
    let set = new Set()
    for (let i = x;i < charArr.length;i++) {
      // 剪枝操作：若有重复字符，则跳过本次迭代
      if (set.has(charArr[i])) continue
      // 首次出现的字符要加入set数组
      set.add(charArr[i]);
      // 交换，将charArr[i]固定在第x位
      [charArr[i], charArr[x]] = [charArr[x], charArr[i]]
      // 开启下一次迭代，固定第x+1位字符
      dfs(x + 1);
      // 恢复交换
      [charArr[x], charArr[i]] = [charArr[i], charArr[x]]
    }
  }  
};