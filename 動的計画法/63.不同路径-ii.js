/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length
    const m = obstacleGrid[0].length
    if (obstacleGrid[0][0] || obstacleGrid[n - 1][m - 1]) {
        return 0
    }
    const dp = []
    for (let i = 0; i < n; i++) {
        dp[i] = []
        for (let j = 0; j < m; j++) {
            dp[i][j] = obstacleGrid[i][j] ^ 1
        }
    }

    for (let i = 1; i < n; i++) {
        if (!dp[i - 1][0]) {
            dp[i][0] = dp[i - 1][0]
        }
    }
    for (let j = 1; j < m; j++) {
        if (!dp[0][j - 1]) {
            dp[0][j] = dp[0][j - 1]
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (dp[i][j]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[n - 1][m - 1]
};
// @lc code=end