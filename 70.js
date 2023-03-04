/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let p = 0, q = 1, r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
};