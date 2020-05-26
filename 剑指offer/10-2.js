/**
 * @description 青蛙跳台阶问题
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  // 同样是斐波那契数列
  let dp = [1, 1]
  if (n < 2) return dp[n]
  
  for (let i = 2; i <= n; i++) {
    dp[2] = (dp[0] + dp[1]) % (1e9 + 7)
    dp[0] = dp [1]
    dp[1] = dp [2]
  }
  return dp[2]
};