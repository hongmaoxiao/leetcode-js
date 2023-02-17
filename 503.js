/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
  const len = nums.length
  const stack = []

  let i = 0
  while (i < len) {
    let curr = nums[i]
    let j = i + 1 === len ? 0 : i + 1
    let flag = false
    while (j !== i) {
      if (curr < nums[j]) {
        stack.push(nums[j])
        flag = true
        break
      }
      j++
      if (j === len) {
        j = 0
      }
    }

    if (!flag) {
      stack.push(-1)
    }

    i++
  }
  
  return stack
};