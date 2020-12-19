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
    let dp1 = nums[0]
    let dp3 = dp2 = Math.max(nums[1], nums[0])
    for (let i = 2; i < nums.length - 1; i++) {
        dp3 = Math.max(dp2, dp1 + nums[i])
        dp1 = dp2
        dp2 = dp3
    }
    let dp4 = nums[1]
    let dp6 = dp5 = Math.max(nums[1], nums[2])
    for (let i = 3; i < nums.length; i++) {
        dp6 = Math.max(dp4 + nums[i], dp5)
        dp4 = dp5
        dp5 = dp6
    }
    return Math.max(dp3, dp6)

};
// @lc code=end