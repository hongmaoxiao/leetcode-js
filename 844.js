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