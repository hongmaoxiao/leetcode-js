/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
  const len = people.length
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    return b[1] - a[1]
  })

  const res = new Array(len).fill(null)
  for (let i = 0; i < len; i++) {
    let spaces = people[i][1] + 1
    for (let j = 0; j < len; j++) {
      if (res[j] === null) {
        --spaces
        if (spaces === 0) {
          res[j] = people[i]
          break
        }
      }      
    }   
  }
  return res
};