/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    if (n <= 2) return nums.length
    let slow = 2
    let fast = 2
    while (fast < n) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
// @lc code=end