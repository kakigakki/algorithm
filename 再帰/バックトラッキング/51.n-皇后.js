/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
//回溯解法
var solveNQueens = function(n) {
    // init board
    let board = new Array(n).fill().map(line => {
        return new Array(n).fill(".")
    })
    let res = []
    let cols = new Set()
    let diagonal1 = new Set()
    let diagonal2 = new Set()
    const helper = (row) => {
        if (row === n) {
            res.push(board.map(line => line.join("")))
            return
        }

        for (let col = 0; col < n; col++) {
            //判断当前列，当前正对角线，当前反对角线上是否已经被占了
            if (cols.has(col) || diagonal1.has(row + col) || diagonal2.has(row - col)) continue
            board[row][col] = 'Q'
            cols.add(col)
            diagonal1.add(row + col)
            diagonal2.add(row - col)
            helper(row + 1)
                //开始回溯
            cols.delete(col)
            diagonal1.delete(row + col)
            diagonal2.delete(row - col)
            board[row][col] = '.'
        }

    }
    helper(0)
    return res
};
// @lc code=end