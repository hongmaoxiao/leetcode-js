/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const len = nums.length
  let left = 0, right = len - 1, pos = len - 1, ans = new Array(len).fill(0)
  while (left <= right) {
    const left_square = nums[left] * nums[left]
    const right_square = nums[right] * nums[right]
    if (left_square > right_square) {
      ans[pos] = left_square
      left++
    } else {
      ans[pos] = right_square
      right--
    }
    pos--
  }
  return ans
};