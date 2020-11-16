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
    if (num.length <= k) {
        return "0"
    }
    let stack = []
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && num[i] < stack[stack.length - 1]) {
            stack.pop()
            k--
        }
        if (num[i] === "0" && stack.length === 0) {
            continue
        } else {
            stack.push(num[i])
        }
    }
    while (k > 0) {
        stack.pop()
        k--
    }
    return stack.length ? stack.join("") : "0"
};
// @lc code=end