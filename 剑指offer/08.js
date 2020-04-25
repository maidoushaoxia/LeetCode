/**
 * @description: 用两个栈实现队列
 */
var CQueue = function() {
  this.inStack  = []
  this.outStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  const { inStack, outStack } = this
  if (!outStack.length) {
    while(inStack.length) {
      outStack.push(inStack.pop())
    }
  }
  return outStack.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */