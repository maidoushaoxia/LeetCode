/**
 * @description 二进制中1的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 按位运算，采用循环移位运算，68ms
    // let res = 0
    // while (n) {
    //   res += n & 1
    //   n >> 1
    // }
    // return res

    // n & (n - 1)，原理是将1变为0，72ms
    let res = 0
    while(n) {
      res ++
      n &= n - 1
    }
    return res

    // 字符串法，80ms
    // return n.toString(2).split('1').length - 1
};