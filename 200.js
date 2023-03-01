/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先搜索
const numIslands = (grid) => {
  if (!grid || grid.length === 0) {
    return 0
  }

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

// 广度优先搜索
const numIslands1 = (grid) => {
  if (!grid || grid.length === 0) {
    return 0
  }

  const row = grid.length
  const column = grid[0].length

  let sum = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === '1') {
        sum++
        grid[i][j] = '0'

        let queue = []
        queue.push({r: i, c: j})

        while (queue.length) {
          const pop = queue.pop()
          const { r, c } = pop
          if (r - 1 >= 0 && grid[r - 1][c] === '1') {
            grid[r - 1][c] = '0'
            queue.push({r: r - 1, c})
          }
          if (r + 1 < row && grid[r + 1][c] === '1') {
            grid[r + 1][c] = '0'
            queue.push({r: r + 1, c})
          }
          if (c - 1 >= 0 && grid[r][c - 1] === '1') {
            grid[r][c - 1] = '0'
            queue.push({r, c: c - 1})
          }
          if (c + 1 < column && grid[r][c + 1] === '1') {
            grid[r][c + 1] = '0'
            queue.push({r, c: c + 1})
          }
        }
      }
    }
  }

  return sum
}