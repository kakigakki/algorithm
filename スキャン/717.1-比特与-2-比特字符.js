/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let res = true
    for (let i = 0; i < bits.length; i++) {
        if (bits[i]) {
            res = false
            i++
        } else {
            res = true
        }
    }
    return res
};
// @lc code=end