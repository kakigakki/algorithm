/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let visited = new Array(nums.length)
    nums.sort((a, b) => a - b)
    let helper = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if ((i > 0 && nums[i - 1] === nums[i] && !visited[i - 1]) || visited[i]) continue
            visited[i] = true
            path.push(nums[i])
            helper(path)
            path.pop()
            visited[i] = false
        }
    }
    helper([])
    return res
};
// @lc code=end