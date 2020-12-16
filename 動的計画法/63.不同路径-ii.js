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
    if (obstacleGrid[0][0] === 1 || obstacleGrid[n - 1][m - 1] === 1) return 0
    const dp = new Array(n).fill().map(() => {
        return new Array(m).fill(0)
    })
    dp[0][0] = 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const up = i >= 1 && obstacleGrid[i - 1][j] !== 1 ? dp[i - 1][j] : 0
            const left = j >= 1 && obstacleGrid[i][j - 1] !== 1 ? dp[i][j - 1] : 0
            dp[i][j] += up + left
        }
    }
    return dp[n - 1][m - 1]

};
// @lc code=end