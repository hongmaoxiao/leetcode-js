/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const ans = []
  
  const backtrack = (target, combine, index) => {
    if (index === candidates.length) {
      return
    }
  
    if (target === 0) {
      ans.push(combine)
      return
    }
  
    backtrack(target, combine, index + 1)
  
    if (target - candidates[index] >= 0) {
      backtrack(target - candidates[index], [...combine, candidates[index]], index)
    }
  }

  backtrack(target, [], 0)
  return ans
};

const combinationSum1 = (candidates, target) => {
  const ans = []
  
  const backtrack = (target, combine, index, sum) => {
    if (sum > target) {
      return
    }
  
    if (target === sum) {
      ans.push(combine)
      return
    }

    for (let i = index; i < candidates.length; i++) {
      backtrack(target, [...combine, candidates[i]], i, sum + candidates[i])
    }
  }

  backtrack(target, [], 0, 0)
  return ans
};