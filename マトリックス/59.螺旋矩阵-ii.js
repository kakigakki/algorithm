/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n))
    let left = 0,
        top = 0,
        right = n - 1,
        bottom = n - 1,
        num = 1
    while (num <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++
        }
        for (let i = top + 1; i <= bottom; i++) {
            matrix[i][right] = num++
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                matrix[bottom][i] = num++
            }
            for (let i = bottom - 1; i >= top + 1; i--) {
                matrix[i][left] = num++
            }
        }
        top++
        left++
        right--
        bottom--
    }
    return matrix
};
// @lc code=end