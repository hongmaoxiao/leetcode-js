/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const len = nums.length
  let left = 1, right = 1, flag = nums[0]
  while (right < len) {
    if (nums[right] !== flag) {
      flag = nums[right];
      [nums[right], nums[left]] = [nums[left], nums[right]]
      left++
    }
    right++
  }
  return left
};