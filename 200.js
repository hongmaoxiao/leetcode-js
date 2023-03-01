/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先搜索
const numIslands = (grid) => {
  const row = grid.length
  const column = grid[0].length

  const dfs = (arr, r, c) => {
    const row = arr.length
    const column = arr[0].length

    arr[r][c] = 0

    if (r - 1 >= 0 && +arr[r - 1][c] === 1) {
      dfs(arr, r - 1, c)
    }
    if (r + 1 < row && +arr[r + 1][c] === 1) {
      dfs(arr, r + 1, c)
    }
    if (c - 1 >= 0 && +arr[r][c - 1] === 1) {
      dfs(arr, r, c - 1)
    }
    if (c + 1 < column && +arr[r][c + 1] === 1) {
      dfs(arr, r, c + 1)
    }
  }

  let sum = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (+grid[i][j] === 1) {
        sum += 1
        dfs(grid, i, j)
      }
    }
  }

  return sum
};

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

console.log('numIslands: ', numIslands(grid))