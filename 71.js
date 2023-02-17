/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const stack = []
  const arr = path.split('/')
  let len = arr.length
  for (let i = 0; i < len; i++) {
    const curr = arr[i];
    switch (curr) {
      case '':
      case '.':
        break;

      case '..':
        const last = stack[stack.length - 1]
        if (last !== '/') {
          stack.pop()
        }
        break;
      
      default:
        stack.push(curr)
        break;
    }
  }

  return `/${stack.join('/')}`
};