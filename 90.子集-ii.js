/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    const helper = (prevChosen, path, index) => {
        if (index === nums.length) {
            res.push(path.slice())
            return
        }
        helper(false, path, index + 1)
        if (!prevChosen && index > 0 && nums[index] === nums[index - 1]) return
        path.push(nums[index])
        helper(true, path, index + 1)
        path.pop()
    }
    helper(false, [], 0)
    return res
};
// @lc code=end