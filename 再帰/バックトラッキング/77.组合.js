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
    let res = []
    let helper = (path, index) => {
        if (path.length === k) {
            res.push(path.slice())
        }
        for (let i = index; i < n; i++) {
            path.push(i + 1)
            helper(path, i + 1)
            path.pop()
        }
    }
    helper([], 0)
    return res
};
// @lc code=end