/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  const len = nums.length
  let rightmost = 0
  if (len === 1) {
    return true
  }
  for (let i = 0; i < len; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])
      if (rightmost >= len - 1) {
        return true
      }
    }
  }

  return false
};