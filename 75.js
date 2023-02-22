/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  const len = nums.length
  let ptr = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      ptr++
    }
  }

  for (let i = ptr; i < len; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      ptr++
    }
  }
};