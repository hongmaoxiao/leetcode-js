/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
const maxSubArray = (nums) => {
  const len = nums.length

  let prev = 0, maxAns = nums[0]
  for (let i = 0; i < len; i++) {
    prev = Math.max(nums[i], prev + nums[i])
    maxAns = Math.max(maxAns, prev)
  }

  return maxAns
};

// 动态规划
const maxSubArray1 = (nums) => {
  const len = nums.length

  for (let i = 1; i < len; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
  }

  return Math.max(...nums)
};