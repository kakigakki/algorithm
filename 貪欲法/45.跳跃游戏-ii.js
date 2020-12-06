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
            //记录每个元素能跳到的最远距离
        let next = 0
        let end = 0
        for (let i = 0; i < nums.length; i++) {
            next = Math.max(next, i + nums[i]) //记录当前点能跳到的最远距离
            if (end >= nums.length - 1) return res
                //当前能跳到的最远距离时的元素。
            if (end === i) {
                end = next
                res++
            }
        }
        return res
    }
    // @lc code=end