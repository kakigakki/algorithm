/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    let j = 0
    while (i < nums.length) {
        if (nums[i] !== val) {
            nums[j] = nums[i]
            j++
        }
        i++
    }
    return j
};
// @lc code=end