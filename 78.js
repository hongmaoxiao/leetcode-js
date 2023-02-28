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