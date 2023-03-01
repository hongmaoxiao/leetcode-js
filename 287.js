/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let slow = 0, fast = 0
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (fast !== slow)
  slow = 0
  while (fast !== slow) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
};

const findDuplicate1 = (nums) => {
  const len = nums.length
  let left = 1, right = len - 1, ans = -1
  while (left <= right) {
    const mid = (left + right) >> 1
    let cnt = 0
    for (let i = 0; i < len; i++) {
      cnt += nums[i] <= mid
    }
    if (cnt <= mid) {
      left = mid + 1
    } else {
      right = mid - 1
      ans = mid
    }
  }

  return ans
};