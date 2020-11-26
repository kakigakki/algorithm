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
    let res = []
    let visited = new Array(nums.length)
    let helper = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue
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