/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map()
  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  }
  
  const heap = []
  let len = 0
  for (const [key, value] of map) {
    if (len < k) {
      heap.push(key)
      if (len === k - 1) {
        buildMaxHeap(heap, map, k)
      }
    } else {
      if (map.get(heap[0]) < value) {
        heap[0] = key
        heapify(heap, map, k, 0)
      }
    }
    len++
  }
  return heap
};

const buildMaxHeap = (arr, map, k) => {
  for (let i = k >> 1; i >= 0; i--) {
    heapify(arr, map, k, i)   
  }
}

const heapify = (arr, map, k, i) => {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let min = i

  if (map.get(arr[min]) > map.get(arr[left]) && left < k) {
    min = left
  }

  if (map.get(arr[min]) > map.get(arr[right]) && right < k) {
    min = right
  }
  
  if (min !== i) {
    [arr[min], arr[i]] = [arr[i], arr[min]]
    heapify(arr, map, k, min)
  }
}

console.log('res: ', topKFrequent([1,1,1,2,2,3], 2))