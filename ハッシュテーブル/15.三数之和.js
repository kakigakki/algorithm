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
    let left,
        right,
        res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return res
        if (nums[i] === nums[i - 1]) continue
        left = i + 1
        right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                while (nums[right] === nums[--right]) continue
            } else if (sum < 0) {
                while (nums[left] === nums[++left]) continue
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while (nums[right] === nums[--right]) continue
                while (nums[left] === nums[++left]) continue
            }
        }
    }
    return res
};
// @lc code=end