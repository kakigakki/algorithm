/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (!cost.length) return 0
    let prev = 0
    let cur = 0
    for (let i = 2; i <= cost.length; i++) {
        let next = Math.min(cur + cost[i - 1], prev + cost[i - 2])
        prev = cur
        cur = next
    }
    return cur
};
// @lc code=end