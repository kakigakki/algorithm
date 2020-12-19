/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length
    if (n <= 1) return s
    let res = ""
    const dp = new Array(n).fill().map(() => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = i; j >= 0; j--) {
            dp[i][j] = s[i] === s[j] && (i - j < 2 || dp[i - 1][j + 1])
            if (dp[i][j] && i - j + 1 > res.length) {
                res = s.slice(j, i + 1)
            }
        }
    }
    return res
};
// @lc code=end