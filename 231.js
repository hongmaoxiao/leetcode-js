/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  return n > 0 && (n & (n - 1)) === 0
};

const isPowerOfTwo1 = (n) => {
  if (n <= 0) {
    return false
  }
  return (n & -n) === n
};