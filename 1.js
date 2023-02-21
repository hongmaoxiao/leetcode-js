/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map()
  const len = nums.length

  for (let i = 0; i < len; i++) {
    const curr = nums[i];
    if (map.has(target - curr)) {
      return [map.get(target - curr), i]
    } else {
      map.set(curr, i)
    }
  }
};