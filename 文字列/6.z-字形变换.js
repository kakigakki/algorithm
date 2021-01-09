/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    const strArr = new Array(numRows).fill().map(() => [])
    let count = 0
    let index = 0
    let col = 0
    while (count < s.length) {
        //此时字符占领整列
        if (!(col % (numRows - 1))) {
            strArr[index].push(s[count])
            index++
            count++
            if (!(index % (numRows))) {
                index = numRows - 2
                col++
            }
        } else {
            //此时字符占领每列其中一个位置
            if (index % (numRows - 1)) {
                strArr[index].push(s[count])
                count++
                col++
                if (!(col % (numRows - 1))) {
                    index = 0
                    continue
                }
            }
            index--
        }
    }
    return strArr.flat().join("")
};
// @lc code=end