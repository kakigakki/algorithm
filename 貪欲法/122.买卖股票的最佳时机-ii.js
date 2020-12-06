/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let res = 0
    let j = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[j] < prices[i]) {
            res += prices[i] - prices[j]
            j = i
        } else {
            j++
        }
    }
    return res

};
// @lc code=end