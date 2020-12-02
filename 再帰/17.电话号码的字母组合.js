/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let res = []
    let helper = (str, index) => {
        if (str.length === digits.length) {
            res.push(str)
            return
        }
        const num = digits[index]
        const numStr = map[num]
        for (let i = 0; i < numStr.length; i++) {
            helper(str + numStr[i], index + 1)
        }
    }
    helper("", 0)
    return res
};
// @lc code=end