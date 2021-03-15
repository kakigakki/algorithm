/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
//二叉树的根有2出度,0个入度
//普通节点有2个出度,1个入度
//Null节点有1个入度,0个出度
//二叉树的总出度等于总入度
var isValidSerialization = function(preorder) {
    if (preorder == "#") { // 特例
        return true
    }
    let inDegree = 0,
        outDegree = 0
    const arr = preorder.split(",")
    for (let i = 0; i < arr.length; i++) {

        if (i === 0) {
            if (arr[i] === "#") {
                return false
            }
            outDegree += 2
            continue
        } else if (arr[i] === "#") {
            inDegree++
        } else {
            inDegree++
            outDegree += 2
        }
        if (i !== arr.length - 1 && inDegree >= outDegree) {
            return false
        }
    }
    return inDegree === outDegree

};
// @lc code=end