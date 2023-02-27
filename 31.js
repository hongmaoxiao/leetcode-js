/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
  const len = nums.length

  let left = len - 1, right = len - 1
  for (let i = left; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      left = i - 1
      break
    }
  }

  if (left === len - 1) {
    swap(nums, 0, len - 1)
    return
  }

  while (right > 0) {
    if (nums[left] < nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left = left + 1
      right = len - 1
      break
    }
    right--
  }

  swap(nums, left, right)
};

const swap = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}