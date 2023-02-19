/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1,
      high = n;

    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2);
      const bad = isBadVersion(mid);
      if (bad) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low
  };
};
