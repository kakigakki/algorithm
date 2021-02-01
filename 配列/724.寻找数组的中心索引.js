/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (!nums.length) return -1
    let sum = 0
    const total = nums.reduce((prev, cur) => prev + cur)
    for (let i = 0; i < nums.length; i++) {
        if (sum === total - nums[i] - sum) return i
        sum += nums[i]
    }
    return -1
};
// @lc +code=end