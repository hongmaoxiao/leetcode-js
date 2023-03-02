/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 自顶向下（递归）
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

// 动态规划 自底向上
const coinChange1 = (coins, amount) => {
  if (amount === 0) {
    return 0
  }

  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin < 0) {
        continue
      }
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}