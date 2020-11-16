/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let map = {}
    for (const c of s) {
        map[c] = (map[c] || 0) + 1
    }
    for (const c of t) {
        if (map[c]) {
            map[c]--
        } else {
            return false
        }
    }
    return true
};
// @lc code=end