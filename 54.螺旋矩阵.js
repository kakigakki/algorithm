/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //算出top,bottom,left,right
    //第一层上面部分都需要经过(top,left)=>(top,right)
    //右面部分(top+1,right)=>(bottom,right)
    //下面部分(bottom,right+1)=>(bottom,left)
    //左面部分(bottom+1,left,top+1,left)
    const res = []
    const n = matrix.length
    const m = matrix[0].length
    let top = 0,
        left = 0,
        right = m - 1,
        bottom = n - 1
    while (res.length < n * m) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])

        }
        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right])
        }

        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i])
            }

            for (let i = bottom - 1; i >= top + 1; i--) {
                res.push(matrix[i][left])
            }
        }
        left++
        top++
        bottom--
        right--
    }
    return res
};
// @lc code=end