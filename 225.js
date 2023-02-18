var MyStack = function() {
  this.queue1 = []
  this.queue2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue2.push(x)
  while (this.queue1.length) {
    this.queue2.unshift(this.queue1.pop())
  }
  const temp = this.queue1
  this.queue1 = this.queue2
  this.queue2 = temp
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue1.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue1[this.queue1.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue1.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */