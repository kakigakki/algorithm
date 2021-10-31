/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(word => {
        const lowerCaseWcord = [...new Set(word.toLowerCase())]
        return [lowerCaseWcord.every(item =>
            "qwertyuiop".includes(item)
        ), lowerCaseWcord.every(item =>
            "asdfghjkl".includes(item)
        ), lowerCaseWcord.every(item =>
            "zxcvbnm".includes(item)
        )].some(item => item)
    })
};
// @lc code=end