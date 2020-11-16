/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ht = {}
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i]
        if (ht[key] !== undefined) {
            return [ht[key], i]
        }
        ht[nums[i]] = i
    }
    return []
};
// @lc code=end