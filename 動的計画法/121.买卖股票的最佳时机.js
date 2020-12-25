/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //dp[i] = Math.max(dp[i-1],price[i]-min)
    let min = Infinity
    let res = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        res = Math.max(prices[i] - min, res)
    }
    return res
};
// @lc code=end