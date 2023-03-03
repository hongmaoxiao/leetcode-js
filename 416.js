/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  const len = nums.length
  if (len < 2) {
    return false
  }
  let max = -Number.MAX_VALUE, sum = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] > max) {
      max = nums[i]
    } 
    sum += nums[i] 
  }

  if (sum % 2 !== 0) {
    return false
  }

  const target = sum / 2
  if (max > target) {
    return false
  }

  const dp = new Array(len).fill(false).map(_ => new Array(target + 1).fill(false))
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (j === 0) {
        dp[i][j] = true
      }
      if (i === 0 && nums[i] === j) {
        dp[i][j] = true
      }    
    }
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]  
      }
    }    
  }

  return dp[len - 1][target]
};

// 空间复杂度优化
const canPartition1 = (nums) => {
  const len = nums.length
  if (len < 2) {
    return false
  }
  let max = -Number.MAX_VALUE, sum = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] > max) {
      max = nums[i]
    } 
    sum += nums[i] 
  }

  if (sum % 2 !== 0) {
    return false
  }

  const target = sum / 2
  if (max > target) {
    return false
  }

  let dp = new Array(target + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < len; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[target]
};