/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = (nums, target) => {
  let sum = 0
  const dfs = (nums, path, i) => {
    if (i === nums.length) {
      if (path === target) {
        sum += 1
      }
      return
    }

    dfs(nums, path + nums[i], i + 1)
    dfs(nums, path - nums[i], i + 1)
  }

  dfs(nums, 0, 0)
  return sum
};