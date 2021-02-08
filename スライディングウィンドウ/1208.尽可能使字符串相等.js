/*
 * @lc app=leetcode.cn id=1208 lang=javascript
 *
 * [1208] 尽可能使字符串相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const n = s.length
    const diff = new Array(n)
    let left = 0,
        right = 0,
        max = 0,
        sum = 0
    for (let i = 0; i < n; i++) {
        diff[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
    }
    while (right < n) {
        sum += diff[right]
        if (sum <= maxCost) {
            max = Math.max(max, right - left + 1)
        } else {
            sum -= diff[left]
            left++
        }
        right++
    }
    return max
};
// @lc code=end