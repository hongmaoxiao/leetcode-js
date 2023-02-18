/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  let add = 0
  const len = s.length
  const stack = []

  for (let i = 0; i < len; i++) {
    const curr = s[i];
    switch (curr) {
      case '(':
        stack.push(curr)
        add++
        break;

      case ')':
        if (add > 0) {
          stack.push(curr)
          add--
        }
        break;
    
      default:
        stack.push(curr)
        break;
    }
  }

  if (add > 0) {
    while (add > 0) {
      let i = stack.length - 1
      while (i >= 0) {
        if (stack[i] === '(') {
          stack.splice(i, 1)
          break
        }
        i--
      }
      add--
    }
  }

  return stack.join('')
};