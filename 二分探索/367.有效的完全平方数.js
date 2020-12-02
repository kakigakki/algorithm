/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    let left = 0,
        right = num
    while (left < right) {
        const mid = (right + left + 1) >>> 1
        if (mid * mid > num) {
            right = mid - 1
        } else if (mid * mid === num) {
            return true
        } else {
            left = mid
        }
    }
    return left * left === num ? true : false
};
// @lc code=end