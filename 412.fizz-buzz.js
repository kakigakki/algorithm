/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({ length: n }, (item, index) => {
        return (item = (++index % 3 ? "" : "Fizz") + (index % 5 ? "" : "Buzz")) ?
            item :
            index + ""
    })
};
// @lc code=end