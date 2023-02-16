/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
  const stack1 = []
  const stack2 = []
  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i)
    if (curr === '#') {
      stack1.pop()
    } else {
      stack1.push(curr)
    }
  }

  for (let i = 0; i < t.length; i++) {
    const curr = t.charAt(i)
    if (curr === '#') {
      stack2.pop()
    } else {
      stack2.push(curr)
    }
  }

  return stack1.join('') === stack2.join('')
};

const backspaceCompare1 = (s, t) => {
  let len1 = s.length - 1, len2 = t.length - 1
  let skipS = 0
  let skipT = 0

  while (len1 >= 0 || len2 >= 0) {
    while (len1 >= 0) {
      if (s[len1] === '#') {
        skipS += 1
        len1 -= 1
      } else if (skipS > 0) {
        skipS -= 1
        len1 -= 1
      } else {
        break
      }
    }

    while (len2 >= 0) {
      if (t[len2] === '#') {
        skipT += 1
        len2 -= 1
      } else if (skipT > 0) {
        skipT -= 1
        len2 -= 1
      } else {
        break
      }
    }

    if (len1 >= 0 && len2 >= 0) {
      if (s[len1] !== t[len2]) {
        return false
      }
    } else if (len1 >= 0 || len2 >= 0) {
      return false
    }

    len1 -= 1
    len2 -= 1
  }

  return true
};