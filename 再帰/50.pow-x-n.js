/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    if (n < 0) return 1 / myPow(x, -n)
    const half = myPow(x, n / 2 | 0)
    return n % 2 ? half * half * x : half * half
};
// @lc code=end