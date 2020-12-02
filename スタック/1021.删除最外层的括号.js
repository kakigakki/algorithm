/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let stack　 = [],
        res = ""
    for (const c of S) {
        if (c === "(") {
            if (stack.length) res += c
            stack.push(c)
        } else if (c === ")") {
            stack.pop()
            if (stack.length) res += c
        }
    }
    return res
};
// @lc code=end