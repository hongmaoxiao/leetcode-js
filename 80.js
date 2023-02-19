/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const len = nums.length
  let left = 1, right = 1, flag = nums[0], count = 1, reslen = 1
  while (right < len) {
    if (nums[right] === flag && count < 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right++
      count++
    } else {
      if (nums[right] !== flag) {
        flag = nums[right];
        [nums[left], nums[right]] = [nums[right], nums[left]]
        count = 1
        left++
        reslen++
      }
      right++
    }
  }
  return left
};