/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  const stack = []
  let len = s.length

  let i = 0
  while (i < len) {
    const curr = s[i];
    if (curr === '+' || curr === '-') {
      stack.push(curr)
      i++
    } else if (curr === ' ') {
      i++
    } else if (curr === '*' || curr === '/') {
      let j = 1
      while (s[i+j] === ' ') {
        j++
      }
      const { index, value } = getNumber(s, i+j)
      const prev = stack.pop()
      let res
      if (curr === '/') {
        res = Math.floor(prev / value)
      } else {
        res = prev * value
      }
      stack.push(res)
      i = index
    } else {
      const { index, value } = getNumber(s, i)
      i = index
      stack.push(value)
    }
  }

  len = stack.length
  if (len === 1) {
    return parseInt(stack[0])
  }

  let sum = 0
  i = 0
  while (i < len) {
    const value = stack[i]
    if (isNumber(value)) {
      const flag = stack[i+1]
      const next = stack[i+2]
      if (flag === '-') {
        sum += (value - next)
      } else {
        sum += (value + next)
      }
      i += 3
    } else {
      const next = stack[i+1]
      if (value === '-') {
        sum -= next
      } else {
        sum += next
      }
      i += 2
    }
  }

  return sum
};

const getNumber = (s, i) => {
  let res = ''
  let item = s[i]
  while (i < s.length && isNumber(item)) {
    res = `${res}${item}`
    i++
    item = s[i]
  }

  return {
    index: i,
    value: +res,
  }
}

const isNumber = (val) => {
  const parse = parseInt(val)
  return Number.isInteger(parse)
}