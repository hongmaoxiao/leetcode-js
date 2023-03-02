/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  const len = prices.length

  if (len === 0) {
    return 0
  }

  const dp = new Array(len).fill(0).map(_ => new Array(3).fill(0))
  dp[0][0] = -prices[0]

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
    dp[i][1] = dp[i - 1][0] + prices[i]
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
  }

  return Math.max(dp[dp.length - 1][1], dp[dp.length - 1][2])
};