/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let min1 = Infinity,
        min2 = Infinity,
        max1 = -Infinity,
        max2 = -Infinity,
        max3 = -Infinity

    for (const x of nums) {
        if (x < min1) {
            min2 = min1
            min1 = x
        } else if (x < min2) {
            min2 = x
        }

        if (x > max1) {
            max3 = max2
            max2 = max1
            max1 = x
        } else if (x > max2) {
            max3 = max2
            max2 = x
        } else if (x > max3) {
            max3 = x
        }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2)
};
// @lc code=end