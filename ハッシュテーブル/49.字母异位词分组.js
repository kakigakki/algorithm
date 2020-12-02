/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//利用字符的字符码计数。
var groupAnagrams = function(strs) {
    if (!strs.length) return []
    let resMap = {}
    for (const str of strs) {
        const arr = new Array(26).fill(0)
        for (const c of str) {
            arr[c.charCodeAt() - 97]++
        }
        const key = arr.join()
        resMap[key] ? resMap[key].push(str) : resMap[key] = [str]
    }
    return Object.values(resMap)
};
// @lc code=end