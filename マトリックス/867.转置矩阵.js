/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const res = new Array(n).fill(0).map(() => new Array(m))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            res[j][i] = matrix[i][j]
        }
    }
    return res
};
// @lc code=end