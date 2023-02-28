/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return 0
  }
  const rows = grid.length
  const columns = grid[0].length
  const f = new Array(rows).fill(0).map(() => new Array(columns).fill(0))
  f[0][0] = grid[0][0]
  for (let i = 1; i < rows; i++) {
    f[i][0] = grid[i][0] + f[i - 1][0]
  }
  for (let i = 1; i < columns; i++) {
    f[0][i] = grid[0][i] + f[0][i - 1]
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j]
    }
  }

  return f[rows - 1][columns - 1]
};