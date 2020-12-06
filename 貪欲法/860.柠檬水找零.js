/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let $five = 0
    let $ten = 0
    for (const m of bills) {
        if (m === 5) {
            $five++
        } else if (m === 10) {
            if (!$five) return false
            $five--
            $ten++
        } else {
            if ($ten) {
                if ($five) {
                    $ten--
                    $five--
                } else {
                    return false
                }
            } else {
                if ($five >= 3) {
                    $five -= 3
                } else {
                    return false
                }
            }
        }
    }
    return true
};
// @lc code=end