/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const len = nums.length;
  const res = [];
  const used = new Array(len).fill(false);
  backtrack(nums, len, res, [], used, 0);
  return res;
};

const backtrack = (arr, len, ans, path, used, depth) => {
  if (depth === len) {
    ans.push(path.slice());
    return;
  }

  for (let i = 0; i < len; i++) {
    const curr = arr[i];
    if (used[i]) {
      continue;
    }
    path.push(curr);
    used[i] = true;
    backtrack(arr, len, ans, path, used, depth + 1);
    path.pop();
    used[i] = false;
  }
};