/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  const len = nums.length
  if (len === 1) {
    return nums[0]
  }
  const maxf = new Array(len).fill(0)
  maxf[0] = nums[0]
  maxf[1] = nums[1]

  for (let i = 2; i < len; i++) {
    maxf[i] = Math.max(...maxf.slice(0, i - 1)) +  nums[i]   
  }

  return Math.max(...maxf)
};

const rob1 = (nums) => {
  const len = nums.length
  if (len === 0 || !nums) {
    return 0
  }
  if (len === 1) {
    return nums[0]
  }
  const maxf = new Array(len).fill(0)
  maxf[0] = nums[0]
  maxf[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    maxf[i] = Math.max(maxf[i - 2] + nums[i], maxf[i - 1])  
  }

  return  maxf[len - 1]
};