/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  let ans = Infinity
  let left = 0, right = 0
  let sum = 0

  while (right < len) {
    sum += nums[right]
    while (sum >= target) {
      ans = Math.min(ans, right - left + 1)
      sum -= nums[left]
      left++
    }
    right++
  }

  return ans === Infinity ? 0 : ans
};