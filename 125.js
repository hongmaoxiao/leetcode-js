/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const len = s.length
  let left = 0, right = len - 1
  

  while (left <= right) {
    while (is_not_character(s[left])) {
      left++
    }

    while (is_not_character(s[right])) {
      right--
    }
    if (String(s[left]).toLowerCase() !== String(s[right]).toLowerCase()) {
      return false
    }
    left++
    right--
  }

  return true
};

const is_not_character = (char) => {
  const zero_code = '0'.charCodeAt()
  const nine_code = '9'.charCodeAt()
  const acode = 'a'.charCodeAt()
  const zcode = 'z'.charCodeAt()

  const code = String(char).toLowerCase().charCodeAt()
  if (code >= zero_code && code <= nine_code) {
    return false
  }

  if (code >= acode && code <= zcode) {
    return false
  }

  return true
}