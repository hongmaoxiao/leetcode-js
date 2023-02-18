/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = (s) => {
  const stack = []
  const len = s.length

  for (let i = 0; i < len; i++) {
    const curr = s[i];
    if (curr === '(') {
      stack.push(curr)
    } else {
      console.log('stack: ', stack)
      const pop = stack.pop()
      if (pop === '(') {
        stack.push(1)
      } else {
        let last = stack.pop()
        let sum = 0
        while (last !== '(') {
          sum += last
          last = stack.pop()
        }
        stack.push((pop + sum) * 2)
      }
    }
  }

  let sum = 0
  for (let i = 0; i < stack.length; i++) {
    const ele = stack[i];
    sum += ele
  }

  return sum
};

const scoreOfParentheses1 = (s) => {
  const len = s.length
  let res = 0
  let dep = 0
  for (let i = 0; i < len; i++) {
    const curr = s[i];
    dep += curr === '(' ? 1 : -1
    if (curr === ')' && s[i - 1] === '(') {
      res += Math.pow(2, dep)
      dep -= 1
    }
  }

  return res
}

const scoreOfParentheses2 = (s) => {
  if (s.length === 2) {
    return 1
  }

  let bal = 0, n = s.length, len = 0
  for (let i = 0; i < n; i++) {
    const curr = s[i];
    bal += curr === '(' ? 1 : -1
    if (bal === 0) {
      len = i + 1
      break
    }
  }

  if (len === n) {
    return 2 * scoreOfParentheses2(s.slice(1, len - 1))
  } else {
    return scoreOfParentheses2(s.slice(0, len)) + scoreOfParentheses2(s.slice(len))
  }
}