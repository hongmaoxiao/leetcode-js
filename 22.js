/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const arr = [];
  backtrack(arr, '', 0, 0, n);
  return arr;
};

const backtrack = (arr, str = '', open, close, len) => {
  if (str.length === len * 2) {
    arr.push(str)
    return
  }

  if (open < len) {
    backtrack(arr, `${str}(`, open + 1, close, len);
  }

  if (close < open) {
    backtrack(arr, `${str})`, open, close + 1, len);
  }
}

// 暴力法
const generateParenthesis1 = (n) => {
  const arr = [];
  next(arr, n, 0);
  return arr;
};

const map = {
  "(": 1,
  ")": -1,
};

const next = (arr, n, index, add = "") => {
  if (index === n * 2) {
    const sum = bracket_sum(add);
    if (sum === 0) {
      arr.push(add);
    }
  } else {
    const value = "()";
    for (let i = 0; i < value.length; i++) {
      const data = value[i];
      const sum = bracket_sum(add);
      const letf_cnt = count_half(add);
      if (letf_cnt > n) {
        break;
      }

      if (index === 2 * n - 1 && sum === 0) {
        break;
      }

      if (sum < 0 || (sum === 0 && i === 1)) {
        continue;
      }
      next(arr, n, index + 1, `${add}${data}`);
    }
  }
};

const bracket_sum = (bracket) => {
  const sum = bracket.split("").reduce((curr, a) => {
    if (a === "") {
      return curr;
    }
    return curr + map[a];
  }, 0);
  return sum;
};

const count_half = (bracket) => {
  return bracket.split("").filter((v) => v === "(").length;
};