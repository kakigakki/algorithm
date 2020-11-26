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
    let stack = []
    let res = 0
    for (let i = 0; i < height.length; i++) {
        while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop()
            if (stack.length === 0) break
            const stackTopIndexNow = stack[stack.length - 1]
            const h = Math.min(height[i], height[stackTopIndexNow]) - height[stackTopIndex]
            console.log(i, h);
            res += h * (i - stackTopIndexNow - 1)
        }
        stack.push(i)
    }
    return res
};
// @lc code=end