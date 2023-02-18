/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const len = temperatures.length
  const ret = new Array(len).fill(0)
  const stack = []

  for (let i = 0; i < len; i++) {
    const curr = temperatures[i];
    
    while (stack.length && temperatures[stack[stack.length - 1]] < curr) {
      ret[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }

    stack.push(i)
  }

  return ret
};