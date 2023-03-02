/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

const lengthOfLIS1 = (nums) => {
  const len = nums.length
  const dp = new Array(len).fill(0)
  let res = 0
  for (const num of nums) {
    let left = 0, right = res
    while (left < right) {
      const mid = (left + right) >> 1
      if (dp[mid] < num) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    dp[left] = num
    if (left === res) {
      res += 1
    }
  }
  return res
};