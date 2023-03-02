/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (amount === 0) {
    return 0
  }
  const count = new Array(amount).fill(0)
  const dp = (coins, amount) => {
    if (amount < 0) {
      return -1
    }
    if (amount === 0) {
      return 0
    }
    if (count[amount - 1] !== 0) {
      return count[amount - 1]
    }

    let min = Infinity
    for (const coin of coins) {
      const res = dp(coins, amount - coin)
      if (res >= 0 && res < min) {
        min = res + 1
      }
    }
    count[amount - 1] = min === Infinity ? -1 : min
    return count[amount - 1]
  }

  dp(coins, amount)
  return count[count.length - 1]
};