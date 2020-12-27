/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //两个一维数组，一个表示第i天，买入股票后最大利益，一个表示卖出股票后最大利益
    const hold = []
    const unhold = []
    if (!prices.length) return 0
    hold[0] = -prices[0]
    hold[1] = Math.max(-prices[1], hold[0])
    unhold[0] = 0
    unhold[1] = Math.max(0, hold[1] + prices[1])
    for (let i = 2; i < prices.length; i++) {
        hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i])
        unhold[i] = Math.max(unhold[i - 1], hold[i] + prices[i])
    }
    return unhold[prices.length - 1]
};
// @lc code=end