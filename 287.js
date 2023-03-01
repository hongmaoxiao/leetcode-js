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