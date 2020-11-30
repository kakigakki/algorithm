/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0
    let stack = []
    for (let i = 0; i < height.length; i++) {
        while (height[i] > height[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop()
            if (stack.length === 0) break
            let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[stackTopIndex]
            let w = i - stack[stack.length - 1] - 1
            res += h * w
        }
        stack.push(i)
    }
    return res
};
// @lc code=end