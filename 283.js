/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const len = nums.length
  let left = 0, right = 0
  while (right < len) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]]
      left++
    }
    right++
  }
};