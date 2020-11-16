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
            //如果栈中已经有前括号的话，证明此时c不为最外层
            if (stack.length) res += c
            stack.push(c)
        } else if (c === ")") {
            stack.pop()
                //如果栈中已经有前括号的话，证明此前c不为最外层
            if (stack.length) res += c
        }
    }
    return res
};
// @lc code=end