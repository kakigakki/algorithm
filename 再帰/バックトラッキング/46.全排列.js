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
    let visited = new Set()
    let hepler = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited.has(i)) continue
            visited.add(i)
            path.push(nums[i])
            hepler(path)
            path.pop()
            visited.delete(i)
        }
    }
    hepler([])
    return res
};
// @lc code=end