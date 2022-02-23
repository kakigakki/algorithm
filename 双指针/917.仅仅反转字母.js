/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * 917. 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let left = 0
    let right = s.length - 1
    const sArr = s.split("")
    const reg = /[A-Z]|[a-z]/
    while (left < right) {
        if (!reg.test(sArr[left])) {
            left++
            continue
        } else if (!reg.test(sArr[right])) {
            right--
            continue
        } else {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
            left++
            right--
        }
    }
    return sArr.join("")
};