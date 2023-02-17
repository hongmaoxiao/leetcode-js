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

const reverseParentheses1 = (s) => {
  const len = s.length
  const pair = new Array(len).fill(0)
  const stack = []
  
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      const pop = stack.pop()
      pair[i] = pop
      pair[pop] = i
    }
  }

  const sb = []
  let index = 0, step = 1
  while (index < len) {
    if (s[index] === '(' || s[index] === ')') {
      index = pair[index]
      step = -step
    } else {
      sb.push(s[index])
    }
    index += step
  }

  return sb.join('')
};