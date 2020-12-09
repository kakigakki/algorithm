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
    // @lc code=end
    let grid = []
    for (let i = m - 1; i >= 0; i--) {
        grid[i] = new Array(n).fill(1)
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
        }
    }
    return grid[m - 1][n - 1]
};
// @lc code=end