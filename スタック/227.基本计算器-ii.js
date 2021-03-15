/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // 11-2+3*2+3
    s = s.trim()
    let preOpt = "+"
    const numStack = []
    let curNum = 0
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== " ") {
            curNum = curNum * 10 + s[i].charCodeAt() - "0".charCodeAt()
        }
        if (isNaN(Number(s[i])) || i === s.length - 1) {
            switch (preOpt) {
                case "+":
                    numStack.push(curNum)
                    break;
                case "-":
                    numStack.push(-curNum)
                    break;
                case "*":
                    numStack.push(curNum * numStack.pop())
                    break;
                case "/":
                    numStack.push(numStack.pop() / curNum | 0)
                    break;
            }
            preOpt = s[i]
            curNum = 0
        }
    }
    let ans = 0;
    while (numStack.length) {
        ans += numStack.pop();
    }
    return ans;
};
// @lc code=end