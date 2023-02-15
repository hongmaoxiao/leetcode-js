var ListNode = function(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var MyLinkedList = function() {
  this.size = 0
  this.head = new ListNode(0)
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size || index < 0) {
    return -1
  }

  let curr = this.head
  for (let i = 0; i <= index; i++) {
    curr = curr.next
  }
  return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return
  }
  this.size++
  index = Math.max(0, index)

  let prev = this.head
  for (let i = 0; i < index; i++) {
    prev = prev.next
  }
  const newNode = new ListNode(val)
  newNode.next = prev.next
  prev.next = newNode
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size || index < 0) {
    return
  }

  this.size--
  let prev = this.head
  for (let i = 0; i < index; i++) {
    prev = prev.next
  }
  prev.next = prev.next.next
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */