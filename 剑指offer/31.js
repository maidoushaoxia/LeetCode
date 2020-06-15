/**
 * @description 栈的压入、弹出序列
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  if (pushed.length != popped.length) {
      return false
  }
  let stack = []
  let i = 0
  for (let num of pushed) {
      stack.push(num)
      while (stack.length !== 0 && stack[stack.length - 1] === popped[i]) {
          stack.pop()
          i++
      }
  }
  return !stack.length
};