/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = (s) => {
  const len = s.length
  let ans = ''
  for (let i = 0; i < len; i++) {
    const curr = s[i]
    if (curr === ' ') {
      ans = `${ans}%20`
    } else {
      ans = `${ans}${curr}`
    }
  }

  return ans
};

const replaceSpace1 = (s) => {
  const len = s.length
  let ans = []
  for (let i = 0; i < len; i++) {
    const curr = s[i]
    if (curr === ' ') {
      ans.push('%20')
    } else {
      ans.push(curr)
    }
  }

  return ans.join('')
};

// 双指针法
const replaceSpace2 = (s) => {
  const arr = Array.from(s)
  let count = 0, len = s.length
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      count++
    }
  }

  if (count === 0) {
    return s
  }

  let left = len - 1, right = len + 2 * count - 1

  while (left < right) {
    if (s[left] === ' ') {
      arr[right--] = '0'
      arr[right--] = '2'
      arr[right--] = '%'
      left--
    } else {
      arr[right--] = arr[left--]
    }
  }

  return arr.join('')
};