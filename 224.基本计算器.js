/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const n = s.length
    const opts = [1]
    let sign = 1
    let res = 0
    let i = 0
    while (i < n) {
        if (s[i] === " ") {
            i++
        } else if (s[i] === "+") {
            sign = opts[opts.length - 1]
            i++
        } else if (s[i] === "-") {
            sign = -opts[opts.length - 1]
            i++
        } else if (s[i] === "(") {
            opts.push(sign)
            i++
        } else if (s[i] === ")") {
            opts.pop()
            i++
        } else {
            let num = 0
            while (i < n && !isNaN(+s[i]) && s[i] !== " ") {
                num = num * 10 + s[i].charCodeAt() - "0".charCodeAt()
                i++
            }
            res += sign * num
        }
    }
    return res
};
// @lc code=end