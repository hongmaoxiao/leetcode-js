/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = (s) => {
  let stack = []
  let res = ''

  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i)
    if (curr === ')') {
      stack.pop()
    }
    if (stack.length) {
      res = `${res}${curr}`
    }
    if (curr === '(') {
      stack.push(curr)
    }
  }

  return res
};