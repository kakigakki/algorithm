/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    let generate = function(str,remainL,remainR){
        //terminator
        if(str.length===n*2){
            res.push(str)
            return 
        }
        //process
        //约束条件为：⚪当仍然存在的remainL时，就能使用remainL
        //⚪当剩余的remainR大于剩余的remainL时，就能使用remainR
        if(remainL>0){
            generate(str+"(",remainL-1,remainR)
        }
        if(remainR> remainL){
            generate(str+")",remainL,remainR-1)
        }
    }
    generate("",n,n)
    return res
};

// @lc code=end

