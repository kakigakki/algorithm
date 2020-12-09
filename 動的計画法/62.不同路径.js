/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
        const dp = new Array(n).fill().map(() => {
            return new Array(m).fill(0)
        })
        dp[0][0] = 1
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const up = i >= 1 ? dp[i - 1][j] : 0
                const left = j >= 1 ? dp[i][j - 1] : 0
                dp[i][j] += up + left
            }
        };
        return dp[n - 1][m - 1]
    }
    // @lc code=end