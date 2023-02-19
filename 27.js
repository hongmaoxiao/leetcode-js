/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  const len = nums.length
  let left = len - 1, right = len - 1, match = 0
  while (left >= 0) {
    if (nums[left] === val) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      right--
      match++
    }
    left--
  }
  nums.length = len - match
  return len - match
};