/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map.has(curr)) {
      return true
    } else {
      map.set(curr, 1)
    }
  }

  return false
};

const containsDuplicate1 = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }

  return false
};