/**
 * @description 打印从1到最大的n位数
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  // 暴力解法，124ms
  const max = Math.pow(10, n)
  let res = []
  for (let i = 1; i < max; i++) {
    res.push(i)
  }
  return res

  // 优化解法，148ms
  // let max = 0
  // for (let i = 0; i < n ; i++) {
  //   max += 9 * Math.pow(10, i)
  // }

  // return Array.from(Array(max), (v, i) => (i + 1))
};