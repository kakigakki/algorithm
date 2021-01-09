/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let end = 0
    let next = 0
    for (let i = 0; i < nums.length; i++) {
        next = Math.max(next, nums[i] + i)
        if (end >= nums.length - 1) return true
        if (end === i) end = next
    }
    return false
};
// @lc code=end