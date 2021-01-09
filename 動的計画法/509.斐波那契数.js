/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (!n) return 0
    let first = 0
    let second = res = 1
    for (let i = 2; i <= n; i++) {
        res = first + second
        first = second
        second = res
    }
    return res
};
// @lc code=end