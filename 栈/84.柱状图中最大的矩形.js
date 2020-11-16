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
        //往栈中加个起始值-1，保证下面计算面积的公式能运作
        //弹出栈的较高的元素*（要插入元素的索引-新栈顶的元素索引-1） 
        let stack = [-1]
            //记录最大面积
        let res = 0
            //在最后插入一个保证比所有值都小的数，来保证达到数组尾部时，能计算未弹栈的元素所占的面积
        heights.push(-1)
        for (let i = 0; i < heights.length; i++) {
            //当要入栈的元素小于栈顶元素时，就可以进行栈顶元素的最大面积计算了
            while (heights[i] < heights[stack[stack.length - 1]]) {
                const stackTopIndex = stack.pop()
                res = Math.max(res, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
            }
            stack.push(i)
        }
        return res
    }
    // @lc code=end