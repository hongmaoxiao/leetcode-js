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

// 单调栈
const nextGreaterElements1 = (nums) => {
  const n = nums.length
  const ret = new Array(n).fill(-1)
  const stk = []

  for (let i = 0; i < 2 * n - 1; i++) {
    while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
      ret[stk[stk.length - 1]] = nums[i % n]
      stk.pop()
    }
    stk.push(i % n)
  }

  return ret
}