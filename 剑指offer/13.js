/**
 * @description: 机器人的运动范围
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  // 首先初始化二维数组，否则报错undefined
  let visited = (new Array(m).fill(false)).map(() => new Array(n).fill(false))

  // 使用广度优先遍历BFS，88ms
  // 初始化队列
  let queue = []
  queue.push([0, 0])
  // 初始化结果
  let res = 0
  
  // 队列为空表示遍历完毕
  while(queue.length) {
    // 弹出当前点的坐标
    let [x, y] = queue.shift()
    // 不满足条件，则跳出循环
    if (x >= m || y >= n || getSum(x) + getSum(y) > k || visited[x][y]) continue
    // 否则说明该点满足要求，结果 + 1
    res++
    // 标记该点为已访问
    visited[x][y] = true
    // 继续向右和向下两个方向遍历
    queue.push([x + 1, y])
    queue.push([x, y + 1])
  }
  // 遍历结束返回结果
  return res

  // 使用深度优先遍历DFS
  // 从坐标原点开始
  // return dfs(0, 0)

  /**
   * @description: dfs函数
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  // function dfs(i, j) {
  //   // 不满足条件的情况：索引越界、位数和过大或已访问过
  //   if (i >= m || j >= n || getSum(i) + getSum(j) > k || visited[i][j]) return 0
  //   // 否则继续向右下两个方向递归
  //   // 先将该点标记为已访问
  //   visited[i][j] = true
  //   // 加上当前点
  //   return 1 + dfs(i + 1, j) + dfs(i, j + 1)
  // }

};


/**
 * @description: 数位和的计算函数
 * @param {number} num
 * @return {number}
 */
function getSum(num) {
  let sum = num % 10
  let temp = Math.floor(num / 10)
  while (temp !== 0) {
    sum += temp % 10
    temp = Math.floor(temp / 10)
  }
  return sum
}