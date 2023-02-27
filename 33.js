/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const len = nums.length

  let i = len - 2
  while (i >= 0 && nums[i] <= nums[i + 1]) {
    i--
  }

  const left = binary_search(nums, target, 0, i)
  const right = binary_search(nums, target, i + 1, len - 1)

  if (left > -1) {
    return left
  }

  if (right > -1) {
    return right
  }

  return -1
};

const binary_search = (arr, target, start, end) => {
  while (start < end) {
    const mid = (start + end) >> 1
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return arr[start] === target ? start : -1
}