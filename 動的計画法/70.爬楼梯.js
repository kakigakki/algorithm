/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step1 = 0
    let step2 = 1
    let res = 0
    for (let i = 0; i < n; i++) {
        res = step1 + step2
        step1 = step2
        step2 = res
    }
    return res
};
// @lc code=end