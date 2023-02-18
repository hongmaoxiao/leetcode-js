/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const len = nums.length

  let low = 0
  let high = len - 1

  while (low <= high) {
    const mid = (low + high) >> 1
    const curr = nums[mid]
    if (curr === target) {
      return mid
      break
    } else if (target > curr) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
};