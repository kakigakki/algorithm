/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const stack = [0]
    const res = []
    for (let i = 0; i <= s.length; i++) {
        if (s[i] !== s[i + 1]) {
            const start = stack.pop()
            if (i + 1 - start >= 3) {
                res.push([start, i])
            }
            stack.push(i + 1)
        }
    }
    return res
};
// @lc code=end