/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const len = nums2.length
  const ret = new Array(len).fill(-1)
  const stack = []

  for (let i = 0; i < len; i++) {
    const curr = nums2[i];

    while (stack.length && nums2[stack[stack.length - 1]] < curr) {
      ret[stack[stack.length - 1]] = curr
      stack.pop()
    }

    stack.push(i)
  }

  let res = []
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      if (curr === nums2[j]) {
        res.push(ret[j])
      }
    }
  }

  return res
};

// 哈希+单调栈
const nextGreaterElement1 = (nums1, nums2) => {
  const len = nums2.length
  const retMap = {}
  const stack = []

  for (let i = 0; i < len; i++) {
    const curr = nums2[i];

    while (stack.length && nums2[stack[stack.length - 1]] < curr) {
      retMap[nums2[stack[stack.length - 1]]] = curr
      stack.pop()
    }

    stack.push(i)
  }

  let res = []
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    const value = retMap[curr] === undefined ? -1 : retMap[curr]
    res.push(value)
  }

  return res
};