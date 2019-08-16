/*
 * @Author: shaoyun
 * @Date: 2019-08-15 11:11:18
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-15 12:28:53
 * @Description: 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0; i<nums.length;i++){
      for(var j=0;j<nums.length;j++){
          if(nums[i] + nums[j] == target){
              if(i<j){
                  return [i,j];
              }else if(i>j){
                  return [j,i];
              }
             
          }
      }
  }
  
};

/**
 * @description: 方法一：双重for循环，168ms
 * @param {type} 
 * @return: 
 */
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++){
        for(let j = i + 1; j<nums.length;j++){
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

/**
 * @description: 方法二：Map，80ms
 * @param {type} 
 * @return: 
 */
var twoSum = function(nums, target) {
    var map = new Map()
    for(let i = 0; i<nums.length;i++){
        // 查找哈希表内是否有这个数
        if (map.has(nums[i])) {
            // 如果有就直接找到了，返回索引
            return [map.get(nums[i]),i]
        } else {
            // 否则就将要找的值存入表内
            map.set(target - nums[i],i)
        }
    }
};
