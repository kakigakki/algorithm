/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let left = 0
    right = nums.length - 1
    res = []
    nums = nums.sort()
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return res
        left = i + 1
        right = nums.length - 1
        console.log(left, right);
        if (nums[i] + nums[left] + nums[right] > 0) {
            while (nums[right] === nums[--right]) continue
        } else if (nums[i] + nums[left] + nums[right] < 0) {
            while (nums[left] === nums[++left]) continue
        } else {
            res.push([nums[i], nums[left], nums[right]])
        }
    }
    return res
};
// @lc code=end