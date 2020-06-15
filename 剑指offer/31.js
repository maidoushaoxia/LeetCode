/**
 * @description 栈的压入、弹出序列
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  if (!pushed.length) return true
  let stack = []
  let j = 0
  for (let i = 0; i < pushed.length;i++) {
    stack.push(pushed[i])
    while (stack.length && j < popped.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      j++
    }
  }
  return !stack.length
};