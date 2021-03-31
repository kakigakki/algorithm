/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [],
        med = -Infinity
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < med) return true
        while (stack[stack.length - 1] < nums[i]) {
            med = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
};
// @lc code=end