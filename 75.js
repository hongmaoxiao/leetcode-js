/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  const len = nums.length
  let ptr = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      ptr++
    }
  }

  for (let i = ptr; i < len; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      ptr++
    }
  }
};

const sortColors1 = (nums) => {
  const len = nums.length
  let ptr0 = 0, ptr1 = 0

  for (let i = 0; i < len; i++) {
    const curr = nums[i];
    if (curr === 2) {
      continue
    }
    if (curr === 1) {
      [nums[ptr1], nums[i]] = [nums[i], nums[ptr1]]
      ptr1++
    }

    if (curr === 0) {
      if (ptr0 === ptr1) {
        [nums[ptr0], nums[i]] = [nums[i], nums[ptr0]]
      } else {
        [nums[ptr0], nums[i]] = [nums[i], nums[ptr0]]
        [nums[ptr1], nums[i]] = [nums[i], nums[ptr1]]
      }
      ptr0++
      ptr1++
    }
  }
};