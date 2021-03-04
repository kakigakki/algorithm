/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const n = matrix.length
    if (!n) return
    const m = matrix[0].length
    if (!m) return
    const preSumMatrix = new Array(n).fill(0).map(() => new Array(m).fill(0))
    preSumMatrix[0][0] = matrix[0][0]
    for (let j = 1; j < m; j++) {
        preSumMatrix[0][j] = preSumMatrix[0][j - 1] + matrix[0][j]
    }
    for (let i = 1; i < n; i++) {
        let CurrentRowPreSum = 0
        for (let j = 0; j < m; j++) {
            CurrentRowPreSum += matrix[i][j]
            preSumMatrix[i][j] = (preSumMatrix[i - 1][j]) + CurrentRowPreSum
        }
    }
    this.matrix = preSumMatrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let total = this.matrix[row2][col2]
    if (row1 && col1) {
        total += this.matrix[row1 - 1][col1 - 1]
    }
    if (row1) {
        total -= this.matrix[row1 - 1][col2]
    }
    if (col1) {
        total -= this.matrix[row2][col1 - 1]
    }
    return total
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end