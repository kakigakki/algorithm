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
//单调递增栈
var removeKdigits = function(num, k) {
    let stack = []
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && num[i] < stack[stack.length - 1]) {
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    if (k > 0) {
        while (k--) {
            stack.pop()
        }
    }

    while (stack[0] === "0") stack.shift()
    return stack.length ? stack.join("") : "0"
};
// @lc code=end