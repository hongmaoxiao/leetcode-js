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

const findTargetSumWays1 = (nums, target) => {
  const len = nums.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (Math.abs(target) > Math.abs(sum)) {
    return 0
  }
  const large = 2 * sum + 1
  let result = new Array(large).fill(0)
  for (let i = 0; i < large; i++) {
    if (i - sum === nums[0]) {
      result[i] += 1
    }
    if (i - sum === -nums[0]) {
      result[i] += 1
    }   
  }

  for (let i = 1; i < len; i++) {
    let temp = new Array(large).fill(0)
    for (let j = 0; j < large; j++) {
      const k = j - sum
      if (k + nums[i] >= -sum && k + nums[i] <= sum) {
        temp[j] += result[j + nums[i]]
      }
      if (k - nums[i] >= -sum && k - nums[i] <= sum) {
        temp[j] += result[j - nums[i]]
      }
    }  
    result = temp.slice()
  }
  return result[target + sum]
};