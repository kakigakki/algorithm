/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length,
        isHuiwen = new Array(n).fill(0).map(() => new Array(n).fill(true)),
        dp = new Array(n).fill(Infinity)
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            isHuiwen[i][j] = (s[i] === s[j]) && isHuiwen[i + 1][j - 1]
        }
    }

    for (let i = 0; i < n; i++) {
        if (isHuiwen[0][i]) {
            dp[i] = 0
        } else {
            for (let j = 0; j < i; j++) {
                if (isHuiwen[j + 1][i]) {
                    dp[i] = Math.min(dp[j] + 1, dp[i])
                }
            }
        }
    }
    return dp[n - 1]
};
// @lc code=end