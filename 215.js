/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  quickSqrt(nums)
  return nums[nums.length - k]
};

const divide = (nums, s, e) => {
  const pivot = nums[e - 1]
  let i = s - 1

  for (let j = s; j < e - 1; j++) {
    if (nums[j] <= pivot) {
      i++
      swap(nums, i, j)
    }
  }
  i++
  swap(nums, i, e - 1)
  return i
}

const swap = (arr, s, e) => {
  [arr[s], arr[e]] = [arr[e], arr[s]]
}

const quickSqrt = (nums, s = 0, e) => {
  e = e || nums.length
  if (s < e - 1) {
    const divide_index = divide(nums, s, e)
    quickSqrt(nums, s, divide_index)
    quickSqrt(nums, divide_index + 1, e)
  }
  return nums
}