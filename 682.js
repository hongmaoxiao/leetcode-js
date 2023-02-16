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
        sum -= top
        stack.pop()
      } else if (curr === 'D') {
        sum += top * 2
        stack.push(top * 2)
      } else if (curr === '+') {
        const prev = stack[stack.length - 2]
        sum += (prev + top)
        stack.push((prev + top))
      } else {
        stack.push(+curr)
        sum += parseInt(curr)
      }
    } else {
      stack.push(+curr)
      sum += parseInt(curr)
    }
  }

  return sum
};