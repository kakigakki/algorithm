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
    let visited = []
    let res = []
    let helper = (path) => {
        if (path.length === n) {
            res.push(path.slice())
            return
        }
        level: for (let i = 0; i < n; i++) {
            if (path.length) {
                for (let j = path.length - 1; j >= 0; j--) {
                    const k = path[j].indexOf("Q")
                    if (k + (path.length - j) === i || k - (path.length - j) === i) continue level
                }
            }
            if (visited[i]) continue level
            visited[i] = true
            let str = ""
            for (let c = 0; c < n; c++) {
                if (c === i) {
                    str += "Q"
                } else {
                    str += "."
                }
            }
            path.push(str)
            helper(path)
            path.pop()
            visited[i] = false
        }
    }
    helper([])
    return res
};
// @lc code=end