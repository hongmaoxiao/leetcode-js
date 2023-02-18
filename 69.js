/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  let low = 0, high = x, res = 0

  while (low <= high) {
    const mid = (low + high) >> 1
    if (mid * mid <= x) {
      res = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return res
};