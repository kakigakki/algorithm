/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length <= k) return "0"
    let stack = []
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && num[i] < stack[stack.length - 1]) {
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    while (k > 0) {
        stack.pop()
        k--
    }
    while (stack[0] === "0") {
        stack.shift()
    }
    let res = stack.join("")
    return res === "" ? "0" : res
};
// @lc code=end