/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let res = 0
    const cols = new Set()
    const pie = new Set()
    const na = new Set()
    const helper = (row) => {
        if (row === n) {
            res++
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue
            cols.add(col)
            pie.add(row + col)
            na.add(row - col)
            helper(row + 1)
            cols.delete(col)
            pie.delete(row + col)
            na.delete(row - col)
        }
    }
    helper(0)
    return res
};
// @lc code=end