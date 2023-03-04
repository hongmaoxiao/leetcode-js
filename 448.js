/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const len = nums.length
  const arr = new Array(len+1).fill(false)

  for (let i = 0; i < len; i++) {
    arr[nums[i]] = true 
  }
  const res = []
  for (let j = 1; j < arr.length; j++) {
    if (!arr[j]) {
      res.push(j)    
    }
  }
  return res
};

const findDisappearedNumbers1 = (nums) => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const x = (nums[i] - 1) % len
    nums[x] += len
  }
  const res = []
  for (let j = 0; j < len; j++) {
    if (nums[j] <= len) {
      res.push(j + 1)
    }
  }
  return res
};
