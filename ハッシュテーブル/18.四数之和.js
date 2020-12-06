/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let left,
        right,
        res = []
    nums.sort((a, b) => a - b)
    for (let j = 0; j < nums.length - 3; j++) {
        if (nums[j] === nums[j - 1]) continue
        for (let i = j + 1; i < nums.length - 2; i++) {
            if (nums[i] === nums[i - 1] && i - 1 !== j) continue
            left = i + 1
            right = nums.length - 1
            while (left < right) {
                const sum = nums[j] + nums[i] + nums[left] + nums[right]
                if (sum > target) {
                    while (nums[right] === nums[--right]) continue
                } else if (sum < target) {
                    while (nums[left] === nums[++left]) continue
                } else {
                    res.push([nums[j], nums[i], nums[left], nums[right]])
                    while (nums[right] === nums[--right]) continue
                    while (nums[left] === nums[++left]) continue
                }
            }
        }
    }
    return res
};
// @lc code=end