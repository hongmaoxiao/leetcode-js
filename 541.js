/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const len = s.length
  const arr = []
  let div = Math.floor(len / (2 * k))
  let mod = len % (2 * k)
  for (let i = 0; i < div * 2 * k; i += 2 * k) {
    arr.push(s.slice(i, i + k).split('').reverse().concat(s.slice(i + k, i + 2 * k).split('')).join(''))
  }

  if (mod < k) {
    arr.push(s.slice(div * 2 * k).split('').reverse().join(''))
  } else if (mod >= k && mod < 2 * k) {
    const val = s.slice(div * 2 * k, div * 2 * k + k).split('').reverse().concat(s.slice(div * 2 * k + k).split('')).join('')
    arr.push(val)
  }
  return arr.join('')
};

const reverseStr1 = (s, k) => {
  const len = s.length
  const arr = s.split('')

  for (let i = 0; i < len; i += 2 * k) {
    const j = Math.min(i + k - 1, len - 1)
    reverse(arr, i, j)

  }
  return arr.join('')
};

const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[end]
    arr[end] = arr[start]
    arr[start] = temp
    start++
    end--
  }
}
