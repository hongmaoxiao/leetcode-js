/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  const merged = []
  const len = intervals.length
  for (let i = 0; i < len; i++) {
    if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
      merged.push(intervals[i])
    } else {
      merged[merged.length - 1][1] = Math.max(intervals[i][1], merged[merged.length - 1][1])
    }
  }

  return merged
};