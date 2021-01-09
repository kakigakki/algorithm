/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (!prices.length) return 0
    const n = prices.length
    const dp = new Array(n).fill().map(() => new Array(k + 1).fill().map(() => new Array(2).fill(0)))

    //定义初始状态值
    for (let i = 1; i <= k; i++) {
        dp[0][i][0] = 0
        dp[0][i][1] = -prices[0]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            //本日未持有股票时最大利益 = 昨天未持有股票最大利益 或者 昨天持有股票时的利益+今天的股价（此时交易两日的次数没有变化）
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
                //本日持有股票时最大利益 = 昨天持有股票最大利益 或者 昨天未持有股票的利益 - 今天的股价（此时前一日的交易次数小于本日的次数）
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
        }
    }

    return dp[n - 1][k][0]
};
// @lc code=end