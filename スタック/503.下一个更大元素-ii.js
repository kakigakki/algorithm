/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const stack = []
    const n = nums.length
    const res = new Array(n).fill(-1)
    for (let i = 0; i < n * 2 - 1; i++) {

        while (nums[i % n] > nums[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop()
            res[stackTopIndex] = nums[i % n]
        }
        stack.push(i % n)
    }
    return res

};
// @lc code=end