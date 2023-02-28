/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  const len = nums.length
  const max_arr = new Array(len).fill(0)
  const min_arr = new Array(len).fill(0)
  max_arr[0] = nums[0]
  min_arr[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max_arr[i] = Math.max(max_arr[i - 1] * nums[i], min_arr[i - 1] * nums[i], nums[i])
    min_arr[i] = Math.min(max_arr[i - 1] * nums[i], min_arr[i - 1] * nums[i], nums[i])
  }

  return Math.max(...max_arr)
};