/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const len = nums.length;
  const ans = [];
  const t = [];
  const backtrack = (cur) => {
    if (cur === len) {
      ans.push(t.slice());
      return;
    }

    t.push(nums[cur]);
    backtrack(cur + 1);
    t.pop();
    backtrack(cur + 1);
  };
  backtrack(0);
  return ans;
};

const subsets1 = (nums) => {
  const len = nums.length
  const ans = []
  for (let i = 0; i < (1 << len); i++) {
    const t = []
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        t.push(nums[j])
      }
    }
    ans.push(t)    
  }

  return ans
}