/*
 * @Author: shaoyun
 * @Date: 2019-08-21 12:39:36
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 13:42:41
 * @Description: 整数转罗马数字
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // 把所有可能性
    let M = ['','M','MM','MMM']
    let C = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    let X = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    let I = ['','I','II','III','IV','V','VI','VII','VIII','IX']

    // 计算对应位的数字，与数组对应
    return M[parseInt(num / 1000)] + C[parseInt(num / 100) % 10] + X[parseInt(num / 10) % 10] + I[num % 10]
}
