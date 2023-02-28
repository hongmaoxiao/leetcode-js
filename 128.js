/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const nums_set = new Set()
  for (const num of nums) {
    nums_set.add(num)
  }

  let maxlen = 0
  for (const cur of nums_set) {
    if (!nums_set.has(cur - 1)) {
      let cur_num = cur
      let curlen = 1

      while (nums_set.has(cur_num + 1)) {
        cur_num += 1
        curlen += 1
      }

      maxlen = Math.max(curlen, maxlen)
    }
  }

  return maxlen
};