class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capactity) {
    this.capactity = capactity
    this.hash = new Map()
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    const node = this.hash.get(key)
    if (!node) {
      return -1
    }
    this.moveToHead(node)
    return node.value
  }

  put(key, value) {
    const node = this.hash.get(key)
    if (!node) {
      if (this.count === this.capactity) {
        this.removeLRUItem()
      }
      const new_node = new ListNode(key, value)
      this.hash.set(key, new_node)
      this.addToHead(new_node)
      this.count++
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  removeLRUItem() {
    const tail = this.popTail()
    this.hash.delete(tail.key)
    this.count--
  }

  popTail() {
    const tail = this.dummyTail.prev
    this.removeFromList(tail)
    return tail
  }
}