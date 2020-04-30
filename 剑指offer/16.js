/**
 * @description 数值的整数次方
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // 二分法递归，60ms
  // 判断负指数
  const isNegative = n < 0
  const res = absMyPow(x, Math.abs(n))
  return isNegative ? 1 / res : res
};

/**
 * @description 将指数取绝对值
 * @param {number} x
 * @param {number} n n > 0 
 * @return {number}
 */
function absMyPow(x, n) {
  if (n === 0) return 1
  const subRes = absMyPow(x, Math.floor(n / 2))
  return n % 2 ? subRes * subRes * x : subRes * subRes
}
