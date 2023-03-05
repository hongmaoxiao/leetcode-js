/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const len = nums.length
  const map = new Map()
  const base = len >> 1

  for (let i = 0; i < len; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }

  for (const [k, v] of map) {
    if (v > base) {
      return k
    }
  }
};

const majorityElement1 = (nums) => {
  nums.sort((a, b) => a - b)
  return nums[nums.length >> 1]
}

const majorityElement2 = (nums) => {
  const len = nums.length
  const half = len >> 1

  while (true) {
    const rand = Math.floor(Math.random() * len)
    const candidate = nums[rand]
    if (countOccurences(nums, candidate) > half) {
      return candidate
    }
  }
}

const countOccurences = (nums, target) => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++
    }    
  }
  return count
}