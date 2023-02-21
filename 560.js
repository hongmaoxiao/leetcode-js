/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j >= 0; j--) {
      sum += nums[j]
      if (sum === k) {
        count++
      }
    }
  }
  return count
};

const subarraySum1 = (nums, k) => {
  const map = new Map()
  map.set(0, 1)
  let pre = 0, count = 0
  for (const num of nums) {
    pre += num
    if (map.has(pre - k)) {
      count += map.get(pre - k)
    }
    map.has(pre) ? map.set(pre, map.get(pre) + 1) : map.set(pre, 1)
  }
  return count
};