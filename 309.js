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

const maxProfit1 = (prices) => {
  const len = prices.length
  if (len === 0) {
    return 0
  }

  let f0 = -prices[0]
  let f1 = 0
  let f2 = 0

  for (let i = 1; i < len; i++) {
    const newf0 = Math.max(f0, f2 - prices[i])
    const newf1 = f0 + prices[i]
    const newf2 = Math.max(f1, f2)

    f0 = newf0
    f1 = newf1
    f2 = newf2
  }

  return Math.max(f1, f2)
};