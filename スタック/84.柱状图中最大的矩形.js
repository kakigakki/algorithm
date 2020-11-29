/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
//单调栈解法
var largestRectangleArea = function(heights) {
        let queue = [-1]
        let res = 0
        heights.push(0)
        for (let i = 0; i < heights.length; i++) {
            while (heights[i] < heights[queue[queue.length - 1]]) {
                const stackTopIndex = queue.pop()
                const h = heights[stackTopIndex]
                const w = i - queue[queue.length - 1] - 1
                res = Math.max(res, h * w)
            }
            queue.push(i)
        }
        return res
    }
    // @lc code=end