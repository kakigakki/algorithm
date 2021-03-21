/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let isRow0 = false
    let isCol0 = false
        //如果第一列有0,则flag为true
    for (let i = 0; i < matrix.length; i++) {
        if (!matrix[i][0]) {
            isCol0 = true
        }
    }
    //如果第一行有0,则flag为true
    for (let i = 0; i < matrix[0].length; i++) {
        if (!matrix[0][i]) {
            isRow0 = true
        }
    }
    //将是否置零的结果保存在第一行第一列中
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                matrix[0][j] = matrix[i][0] = 0
            }
        }
    }
    //根据第一行第一列中是否有0来给当前位置置零
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (!matrix[0][j] || !matrix[i][0]) {
                matrix[i][j] = 0
            }
        }
    }
    if (isRow0) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0
        }
    }
    if (isCol0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
    return matrix
};
// @lc code=end