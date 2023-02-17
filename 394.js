/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  const stack = [];
  let str = "";

  const getNumber = (val) => {
    let len = val.length - 1
    let res = ''
    while (len >= 0) {
      const s = val[len]
      let parse = parseInt(s)
      let check = Number.isInteger(parse);
      if (check) {
        res = `${parse}${res}`
      } else {
        break
      }
      len--
    }
    return {
      index: len,
      value: +res
    }
  }

  for (const ch of s) {
    if (ch === "[") {
      stack.push(str);
      str = "";
    } else if (ch === "]") {
      const pop = stack.pop();
      if (pop) {
        let { index, value } = getNumber(pop)
        str = str.repeat(value);
        str = `${pop.slice(0, index + 1)}${str}`;
      }
    } else {
      str = `${str}${ch}`;
    }
  }

  return str;
};