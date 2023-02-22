/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const len = nums.length
  const arr = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
      break
    }
    if (nums[i] + nums[len - 2] + nums[len - 1] < 0) {
      continue
    }

    let left = i + 1, right = len - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        left++
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    } 
  }
  return arr
};