/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums.length) return 0
    if (nums.length <= 2) return Math.max(...nums)
        //当偷第一户时，不偷最后一户
    let dp1 = nums[0]
    let dp3 = dp2 = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length - 1; i++) {
        dp3 = Math.max(dp2, dp1 + nums[i])
        dp1 = dp2
        dp2 = dp3
    }
    //当偷最后一户时，不偷第一户
    let dp4 = nums[1]
    let dp6 = dp5 = Math.max(nums[1], nums[2])
    for (let i = 3; i < nums.length; i++) {
        dp6 = Math.max(dp5, dp4 + nums[i])
        dp4 = dp5
        dp5 = dp6
    }
    return Math.max(dp6, dp3)
};
// @lc code=end