/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let low = 0, high = nums.length - 1, res = -1
  
  while (low <= high) {
    const mid = (low + high) >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      res = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return res + 1
};

const searchInsert1 = (nums, target) => {
  let low = 0, high = nums.length - 1, res = nums.length
  
  while (low <= high) {
    const mid = (low + high) >> 1
    if (nums[mid] >= target) {
      res = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return res
};