/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    let helper = (path, start) => {
        if (path.length === k) {
            res.push(path.slice())
            return
        }
        for (let i = start; i <= n; i++) {
            path.push(i)
            helper(path, i + 1)
            path.pop()
        }
    }
    helper([], 1)
    return res
};
// @lc code=end