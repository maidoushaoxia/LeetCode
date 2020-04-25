/**
 * @description: 斐波那契数列
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 使用动态规划
  let dp = [0, 1]

  if (n <= 1) return dp[n]

  for (let i = 2; i <= n; i++) {
    dp[2] = (dp[0] + dp[1]) % (1e9 + 7)
    dp[0] = dp[1]
    dp[1] = dp[2]
  }
  return dp[2]
};