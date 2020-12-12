/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length
    const m = text2.length
    const dp = new Array(n + 1).fill().map(row => {
        return new Array(m + 1).fill(0)
    })
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (text1[i] === text2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }
    return dp[n][m]
};
// @lc code=end