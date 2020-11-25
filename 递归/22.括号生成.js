/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    let helper = (str, remainL, remainR) => {
        if (str.length === n * 2) {
            res.push(str)
            return
        }

        if (remainL > 0) {
            helper(str + "(", remainL - 1, remainR)
        }
        if (remainR > remainL) {
            helper(str + ")", remainL, remainR - 1)
        }
    }
    helper("", n, n)
    return res
};

// @lc code=end