/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
  const len = nums.length
  let start = 0, end = len - 1
  const copy = []
  for (let i = 0; i < len; i++) {
    copy.push(nums[i])    
  }
  copy.sort((a, b) => a - b)

  while (start < len) {
    if (copy[start] !== nums[start]) {
      break
    }
    start++
  }

  if (start === len) {
    return 0
  }

  while (end >= 0) {
    if (copy[end] !== nums[end]) {
      break
    }
    end--
  }

  return end - start + 1
};

const findUnsortedSubarray1 = (nums) => {
  const len = nums.length
  let maxn = -Number.MAX_VALUE, right = -1
  let minn = Number.MAX_VALUE, left = -1
  for (let i = 0; i < len; i++) {
    if (maxn > nums[i]) {
      right = i
    } else {
      maxn = nums[i]
    }
    if (minn < nums[len - i - 1]) {
      left = len - i - 1
    } else {
      minn = nums[len - i - 1]
    } 
  }
  return right === -1 ? 0 : right - left + 1
}
