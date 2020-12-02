/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = []
    const res = new Array(T.length).fill(0)
    for (let i = 0; i < T.length; i++) {
        while (T[i] > T[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop()
            res[stackTopIndex] = i - stackTopIndex
        }
        stack.push(i)
    }
    return res
};
// @lc code=end