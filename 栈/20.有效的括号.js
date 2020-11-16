/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") stack.push(")")
        else if (char === "[") stack.push("]")
        else if (char === "{") stack.push("}")
        else if (stack.length === 0 || stack.pop() !== char) {
            return false
        }
    }
    return stack.length === 0 ? true : false
};
// @lc code=end