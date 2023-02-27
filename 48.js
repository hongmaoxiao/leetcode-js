/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const len = matrix.length
  const ans = new Array(len).fill(0).map(v => new Array(len).fill(0))

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      ans[j][len - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = ans[i][j]
    }
  }
};

const rotate1 = (matrix) => {
  const len = matrix.length
  for (let i = 0; i < len >> 1; i++) {
    for (let j = 0; j < len; j++) {
      [matrix[i][j], matrix[len - i - 1][j]] = [matrix[len - i - 1][j], matrix[i][j]]
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}