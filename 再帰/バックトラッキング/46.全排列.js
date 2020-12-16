/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let visited = []
    let res = []
    let helper = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue
            path.push(nums[i])
            visited[i] = true
            helper(path)
            path.pop()
            visited[i] = false
        }
    }
    helper([])
    return res
};
// @lc code=end