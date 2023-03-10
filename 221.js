/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  let maxSide = 0;
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return maxSide;
  }
  const rows = matrix.length,
    columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const curr = matrix[i][j];
      if (curr === "1") {
        maxSide = Math.max(maxSide, 1);
        const currMaxSide = Math.min(rows - i, columns - j);
        for (let k = 1; k < currMaxSide; k++) {
          let flag = true;
          if (matrix[i + k][j + k] === "0") {
            break;
          }
          for (let x = 0; x < k; x++) {
            if (matrix[i + k][j + x] === "0" || matrix[i + x][j + k] === "0") {
              flag = false;
              break;
            }
          }

          if (flag) {
            maxSide = Math.max(maxSide, k + 1);
          } else {
            break;
          }
        }
      }
    }
  }

  return maxSide * maxSide
};

const maximalSquare1 = (matrix) => {
  let maxSide = 0;
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return maxSide;
  }
  const rows = matrix.length,
    columns = matrix[0].length;
  const dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const curr = matrix[i][j];
      if (curr === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }

  return maxSide * maxSide
};
