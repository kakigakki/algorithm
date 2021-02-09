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
    const arr = []
    let left = 0,
        right = 0,
        sum = 0
    for (let i = 0; i < s.length; i++) {
        arr.push(Math.abs(s[i].charCodeAt() - t[i].charCodeAt()))
    }
    while (right < arr.length) {
        sum += arr[right]
        if (sum > maxCost) {
            sum -= arr[left++]
        }
        right++
    }
    return right - left
};
// @lc code=end