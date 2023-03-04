/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const len = tasks.length
  const char_count = new Array(26).fill(0)
  for (let i = 0; i < len; i++) {
    ++char_count[tasks[i].charCodeAt() - 'A'.charCodeAt()] 
  }
  char_count.sort((a, b) => b - a)
  let cnt = 1
  while (cnt < char_count.length && char_count[cnt] === char_count[0]) {
    cnt++
  }
  return Math.max(len, (n + 1) * (char_count[0] - 1) + cnt)
};