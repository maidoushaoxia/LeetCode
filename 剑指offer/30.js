/**
 * initialize your data structure here.
 * @description 包含min函数的栈
 */
var MinStack = function() {
  this.stackA = []
  // 辅助栈
  this.stackB = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stackA.push(x)
  // 若辅助栈为空，或辅助栈栈顶元素比x大，则x进入辅助栈
  if (!this.stackB.length || x <= this.stackB[this.stackB.length - 1]) {
    this.stackB.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stackA.pop() === this.stackB[this.stackB.length - 1]) {
    this.stackB.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stackA[this.stackA.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.stackB[this.stackB.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */