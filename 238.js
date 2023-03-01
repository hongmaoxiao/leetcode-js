/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const len = nums.length
  let L = new Array(len).fill(1)
  L[0] = 1
  let R = new Array(len).fill(1)
  R[len - 1] = 1
  for (let i = 1; i < len; i++) {
    L[i] = L[i - 1] * nums[i - 1]
  }
  for (let i = len - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < len; i++) {
    nums[i] = L[i] * R[i] 
  }

  return nums
};

const productExceptSelf1 = (nums) => {
  const len = nums.length
  const answers = new Array(len).fill(0)
  answers[0] = 1
  for (let i = 1; i < len; i++) {
    answers[i] = answers[i - 1] * nums[i - 1]
  }

  let mul = 1
  for (let i = len - 1; i >= 0; i--) {
    answers[i] = answers[i] * mul
    mul *= nums[i]
  }

  return answers
}