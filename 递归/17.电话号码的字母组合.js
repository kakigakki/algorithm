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
        //定义map存储每个号码的字符
    let map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ['5', "jkl"],
        ['6', "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ])
    let res = []
    let helper = (str, index) => {
        if (index === digits.length) {
            res.push(str)
            return
        }
        for (const c of map.get(digits[index])) {
            helper(str + c, index + 1)
        }
    }
    helper("", 0)
    return res
};
// @lc code=end