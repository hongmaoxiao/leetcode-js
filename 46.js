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

// 不需要借助额外空间复杂度
const permute1 = (nums) => {
  const len = nums.length;
  const res = [];

  const backtrack = (first = 0) => {
    if (first === len) {
      res.push(nums.slice());
      return;
    }
    for (let i = first; i < len; i++) {
      [nums[i], nums[first]] = [nums[first], nums[i]];
      backtrack(first + 1);
      [nums[i], nums[first]] = [nums[first], nums[i]];
    }
  };

  backtrack();
  return res;
};