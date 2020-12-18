/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let helper = (index, path) => {
        if (index === nums.length) {
            res.push(path.slice())
            return
        }
        helper(index + 1, path)
        path.push(nums[index])
        helper(index + 1, path)
        path.pop()
    }
    helper(0, [])
    return res
};
// @lc code=end