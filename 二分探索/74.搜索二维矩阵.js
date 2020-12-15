/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//双指针
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false
    let n = matrix.length
    let m = matrix[0].length
    let left = 0
    let right = n * m - 1
    while (left <= right) {
        const mid = left + (right - left >>> 1)
        const val = matrix[mid / m | 0][mid % m]
        if (val === target) {
            return true
        } else if (val > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
};
// @lc code=end