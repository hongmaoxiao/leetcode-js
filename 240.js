/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const rows = matrix.length, columns = matrix[0].length

  let row = 0, column = columns - 1
  let find = false
  while (row < rows && column >= 0) {
    if (matrix[row][column] === target) {
      find = true
      break
    }
    if (matrix[row][column] < target) {
      row++
    } else {
      column--
    }
  }

  return find
};