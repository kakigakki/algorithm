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
    let hepler = (path, index) => {
        if (index === nums.length) {
            res.push(path.slice())
            return
        }
        hepler(path.slice(), index + 1)
        path.push(nums[index])
        hepler(path.slice(), index + 1)

    }
    hepler([], 0)
    return res
};
// @lc code=end