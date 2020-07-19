/*
 * @Author: your name
 * @Date: 2020-07-19 19:39:46
 * @LastEditTime: 2020-07-19 19:44:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\剑指offer\40.js
 */ 
/**
 * @description 最小的k个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) => a - b)
  return arr.splice(0, k)
};