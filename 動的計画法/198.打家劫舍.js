/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
        //f(i) = Math.max(f(i-1),f(i-2)+num[i])
        if (!nums.length) return 0
        if (nums.length === 1) return nums[0]
        let dp1 = nums[0]
        let dp3 = dp2 = Math.max(nums[0], nums[1])
        for (let i = 2; i < nums.length; i++) {
            dp3 = Math.max(dp2, dp1 + nums[i])
            dp1 = dp2
            dp2 = dp3
        }
        return dp3
    }
    // @lc code=end