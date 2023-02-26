/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  const len = height.length
  let ans = 0
  let left = 0, right = len - 1
  while (left < right) {
    const left_data = height[left]
    const right_data = height[right]
    const value = Math.min(left_data, right_data) * (right - left)
    if (value > ans) {
      ans = value
    }

    if (left_data >= right_data) {
      right--
    } else {
      left++
    }
  }

  return ans
};