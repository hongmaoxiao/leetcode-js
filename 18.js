/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const res = []
  const len = nums.length
  if (len < 4) {
    return res
  }
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break
    }
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
      continue
    }

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break
      }
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
        continue
      }

      let left = j + 1, right = len - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          left++
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
};