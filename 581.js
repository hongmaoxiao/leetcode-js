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
