/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0,
        right = 0,
        min = Infinity,
        sum = 0
    const n = nums.length
    while (right < n) {
        sum += nums[right]
        while (sum >= target) {
            min = Math.min(min, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return min === Infinity ? 0 : min
};
// @lc code=end