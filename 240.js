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

const searchMatrix1 = (matrix, target) => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  const rows = matrix.length, columns = matrix[0].length

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] > target) {
      return false
    }
    if (matrix[i][columns - 1] < target) {
      continue
    }
    const find = binary_search(matrix[i], target, 0, columns - 1)
    if (find !== -1) {
      return true
    }
  }

  return false
};

const binary_search = (arr, target, start, end) => {
  while (start < end) {
    const mid = (start + end) >> 1
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return arr[start] === target ? start : -1
}