/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const h = board.length, w = board[0].length
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  const visited = new Array(h).fill(false).map(() => new Array(w).fill(false))

  const check = (i, j, s, k) => {
    if (board[i][j] !== s[k]) {
      return false
    } else if (k === s.length - 1) {
      return true
    }
    visited[i][j] = true
    let result = false
    for (const [dx, dy] of directions) {
      const newx = dx + i
      const newy = dy + j
      if (newx >= 0 && newx < h && newy >= 0 && newy < w) {
        if (!visited[newx][newy]) {
          result = check(newx, newy, s, k + 1)
          if (result) {
            break
          }
        }
      }
    }
    visited[i][j] = false
    return result
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const checked = check(i, j, word, 0)
      if (checked) {
        return true
      }      
    }    
  }

  return false
};