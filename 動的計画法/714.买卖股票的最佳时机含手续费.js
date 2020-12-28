/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
        const hold = []
        const unhold = []
            //第i天 未持有股票时的钱
        unhold[0] = 0
            //第i天，持有股票时的钱
        hold[0] = -prices[0]
        for (let i = 1; i < prices.length; i++) {

            hold[i] = Math.max(hold[i - 1], unhold[i - 1] - prices[i])
            unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i] - fee)
        }
        return unhold[prices.length - 1]
    }
    // @lc code=end