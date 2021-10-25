/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
        //遍历行
    for (let i = 0; i < m; i++) {
        let l = 0,
            r = n - 1

        //二分列
        while (l < r) {
            const mid = r + l + 1 >> 1
            if (target >= matrix[i][mid]) {
                l = mid
            } else {
                r = mid - 1
            }
        }
        if (matrix[i][r] === target) {
            return true
        }
    }
    return false
};
// @lc code=end