/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  const len = nums.length

  let prev = 0, maxAns = nums[0]
  for (let i = 0; i < len; i++) {
    prev = Math.max(nums[i], prev + nums[i])
    maxAns = Math.max(maxAns, prev)
  }

  return maxAns
};