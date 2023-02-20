/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = (answers) => {
  const map = new Map();
  const len = answers.length;

  for (let i = 0; i < len; i++) {
    const curr = answers[i];
    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else {
      map.set(curr, 1);
    }
  }

  let sum = 0;
  for (const [y, x] of map.entries()) {
    sum += Math.ceil(x / (y + 1)) * (y + 1);
  }

  return sum;
};