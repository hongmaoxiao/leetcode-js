/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = (s) => {
  const stack = []
  let str = ''
  
  for (const ch of s) {
    if (ch === '(') {
      stack.push(str)
      str = ''
    } else if (ch === ')') {
      str = str.split('').reverse().join('')
      str = `${stack[stack.length - 1]}${str}`
      stack.pop()
    } else {
      str = `${str}${ch}`
    }
  }

  return str
};