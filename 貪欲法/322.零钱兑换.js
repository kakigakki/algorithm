/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let res = Infinity
    if (!coins.length) return -1
    if (!amount) return 0
    coins.sort((a, b) => b - a)
    const helper = (amount, count, index) => {
        if (!amount) {
            res = Math.min(count, res)
            return
        }
        if (index === coins.length) {
            return
        }
        //贪心算法时的dfs
        for (let i = amount / coins[index] | 0; i >= 0 && count + i < res; i--) {
            helper(amount - i * coins[index], count + i, index + 1)
        }
    }
    helper(amount, 0, 0)
    return res === Infinity ? -1 : res
};
// @lc code=end