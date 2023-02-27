/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const len = nums.length;
  let ans = [-1, -1];
  const leftIdx = binary_search(nums, target, true);
  const rightIdx = binary_search(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < len &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};

const binary_search = (arr, target, lower) => {
  let left = 0,
    right = arr.length - 1,
    ans = arr.length;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] > target || (lower && arr[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};
