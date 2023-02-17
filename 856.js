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