/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//贪心算法
var jump = function(nums) {
        let res = 0
        let end = 0
        let next = 0
        for (let i = 0; i < nums.length; i++) {
            next = Math.max(i + nums[i], next)
            if (end >= nums.length - 1) return res
            if (end === i) {
                end = next
                res++
            }
        }
        return res
    }
    // @lc code=end