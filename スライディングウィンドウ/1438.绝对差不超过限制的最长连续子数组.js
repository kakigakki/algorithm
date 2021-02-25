/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    //[8,4,5,2,7],5
    //[1,5,4,8,7]
    let left = 0,
        right = 0,
        maxLength = 0,
        min = nums[0],
        max = nums[0]
    const n = nums.length
    while (right < n) {
        min = Math.min(nums[right], min)
        max = Math.max(nums[right], max)
        if (Math.abs(max - min) > limit) {
            left++
            max = 0
            min = Infinity
            for (let i = left; i <= right; i++) {
                max = Math.max(max, nums[i])
                min = Math.min(min, nums[i])
            }
        }
        maxLength = Math.max(maxLength, right - left + 1)
        right++
    }
    return maxLength
};
// @lc code=end