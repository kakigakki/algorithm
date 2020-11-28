/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    let left = 1,
        right = (x + 1) >>> 1
    while (left < right) {
        //必须取左中位数，否则可能陷入死循环
        const mid = left + ((right - left + 1) >>> 1)
        if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
};
// @lc code=end