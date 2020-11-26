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
    let map = {}
    for (const str of strs) {
        let arr = new Array(26).fill(0)
        for (const c of str) {
            const cCode = c.charCodeAt() - 97
            arr[cCode] = (arr[cCode] || 0) + 1
        }
        const strKey = arr.join()
        map[strKey] ? map[strKey].push(str) : map[strKey] = [str]
    }
    return Object.values(map)
};
// @lc code=end