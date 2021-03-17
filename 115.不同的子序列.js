/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    //动规公式: s[i-1]===t[j-1] => dp[i][j] = dp[i-1][j-1] +dp[i-1][j]
    // s[i-1]!=t[j-1] => dp[i][j] =dp[i-1][j]
    //base:dp[0][j] = 0 dp[0][j] = 1
    const n = s.length,
        m = t.length,
        dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][m]

};
// @lc code=end