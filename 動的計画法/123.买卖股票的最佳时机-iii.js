/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0
    }
    const n = prices.length
        //定义一个三维数组，分别保存（天，交易次数，是否持有股票）
    const dp = new Array(n).fill().map(() => new Array(3).fill().map(() => new Array(2).fill(0)))
        //第1天，做第1次交易，未持有股票时利润肯定为0
    dp[0][1][0] = 0
        //第1天，做第2次交易，未持有股票时利润肯定为0
    dp[0][2][0] = 0
        //第1天，做第1次交易，持有股票时利润
    dp[0][1][1] = -prices[0]
        //第1天，做第2次交易，未持有股票时利润
    dp[0][2][1] = -prices[0]

    for (let i = 1; i < n; i++) {
        dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i])
        dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i])
        dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
        dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
    }
    return dp[n - 1][2][0]
};
// @lc code=end