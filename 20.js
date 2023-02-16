/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const arr = s.split("");
  const right_arr = [];

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  while (arr.length) {
    const pop = arr.pop();
    if (right_arr.length > 0) {
      const first = right_arr[right_arr.length - 1];
      if (map[pop] === first) {
        right_arr.pop();
      } else {
        right_arr.push(pop);
      }
    } else {
      right_arr.push(pop);
    }
  }

  return arr.length === 0 && right_arr.length === 0;
};

const isValid1 = (s) => {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i);
    let prev
    switch (curr) {
      case "{":
      case "[":
      case "(":
        arr.push(curr);
        break;

      case "}":
        prev = arr.pop();
        if (prev !== "{") {
          return false;
        }
        break;

      case "]":
        prev = arr.pop();
        if (prev !== "[") {
          return false;
        }
        break;

      case ")":
        prev = arr.pop();
        if (prev !== "(") {
          return false;
        }
        break;

      default:
        break;
    }
  }

  return arr.length === 0
};
