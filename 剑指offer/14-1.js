/**
 * @description: 剪绳子
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  // 贪心算法，找规律，应拆分成更多的3，52ms
  // n为2，3时，最大值为n - 1
  if (n <= 3) return n - 1

  const mod = n % 3
  const num = Math.floor(n / 3)
  // n可以整除3时，直接相乘
  if (mod === 0) return Math.pow(3, num)
  // 余数为1，则拆分成两个2
  if (mod === 1) return 4 * Math.pow(3, (n - 4) / 3)
  // 余数为2，直接相乘
  if (mod === 2) return 2 * Math.pow(3, (n - 2) / 3)

  // 动态规划，68ms
  // 初始化dp数组，长度为n + 1比较方便
  // let dp = new Array(n + 1).fill(0)
  // // 出口为n = 2
  // dp[2] = 1
  // for (let i = 3; i <= n; i++) {
  //   for(let j = 1; j < i; j++) {
  //     // 首先是本次拆分结果的比较j * (i - j)与j * dp[i - j]，然后与上一次的比较
  //     // dp[i] = Math.max(dp[i], Math.max(j * dp[i - j], j * (i - j)))
  //     // 简化
  //     dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j))
  //   }
  // }
  // return dp[n]
};