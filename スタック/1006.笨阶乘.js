/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {

    //对于表达式求值，大家已经很熟悉了，需要用「栈」这个数据结构。
    //求解没有括号的中缀表达式的时候，可以用一句顺口溜来概括：遇到乘除立即算，遇到加减先入栈。
    const stack = [N]
    const opp = ["*", "/", "+", "-"]
    for (let i = N - 1, j = 0; i > 0; i--, j++) {
        const o = opp[j % 4]
        if (o === "*") {
            stack[stack.length - 1] *= i
        } else if (o === "/") {
            stack[stack.length - 1] = stack[stack.length - 1] / i | 0
        } else if (o === "+") {
            stack.push(i)
        } else if (o === "-") {
            stack.push(-i)
        }
    }

    return stack.reduce((a, b) => a + b)
};
// @lc code=end