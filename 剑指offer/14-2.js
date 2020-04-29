/**
 * @description 剪绳子II
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  // 贪心算法，与上一题不同之处在于大数取模，需要在过程中取模
  if (n <= 3) return n - 1
  let res = 1
  while (n > 4) {
    res = res * 3 % (1e9 + 7)
    n -= 3
  }
  return n * res % (1e9 + 7)
};