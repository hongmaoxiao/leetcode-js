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

// 直接分半，一半一定有序，另一半可能有序也可能无序
const search1 = (nums, target) => {
  const len = nums.length
  if (len === 0) {
    return -1
  }
  if (len === 1) {
    return nums[0] === target ? 0 : -1
  }

  let l = 0, r = len - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] === target) {
      return mid
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target <= nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[len - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}