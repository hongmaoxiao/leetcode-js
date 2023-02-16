/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = (operations) => {
  const stack = []
  let sum = 0

  for (let i = 0; i < operations.length; i++) {
    const curr = operations[i];
    if (stack.length) {
      const top = stack[stack.length - 1]
      if (curr === 'C') {
        stack.pop()
      } else if (curr === 'D') {
        stack.push(top * 2)
      } else if (curr === '+') {
        const prev = stack[stack.length - 2]
        stack.push((prev + top))
      } else {
        stack.push(+curr)
      }
    } else {
      stack.push(+curr)
    }
  }

  for (let j = 0; j < stack.length; j++) {
    sum += +stack[j]
  }

  return sum
};