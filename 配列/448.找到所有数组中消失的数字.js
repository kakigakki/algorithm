/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length
    const res = []
    for (const num of nums) {
        const index = (num - 1) % n
        nums[index] += n
    }

    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            res.push(i + 1)
        }
    }

    return res

};
// @lc code=end