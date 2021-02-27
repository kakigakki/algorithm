/*
 * @lc app=leetcode.cn id=1178 lang=javascript
 *
 * [1178] 猜字谜
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */

//将字母出现的状态转化为二进制状态:26个字符的出现与否的状态转为二进制，可以用Int保存，因为int为32位
//如何求二进制的子集是这题的关键
var findNumOfValidWords = function(words, puzzles) {

    //求出一个字符集中字符的出现与否状态。用二进制表示
    const getBits = (word) => {
        let res = 0
        for (const char of word) {
            const charCode = char.charCodeAt() - 97
            const charBit = 1 << charCode
            res |= charBit
        }
        return res
    }
    const res = new Array(puzzles.length).fill(0)
    const map = {}
        //算出所有单词的对应二进制装进哈希表
    for (const word of words) {
        const bit = getBits(word)
        map[bit] = (map[bit] || 0) + 1
    }
    for (let i = 0; i < puzzles.length; i++) {
        const puzzleBit = getBits(puzzles[i])
        const firstChar = getBits(puzzles[i][0])
        let n = puzzleBit
        while (n > 0) {
            //如果含首字母，且该谜底有对应的单词
            if ((n & firstChar) && map[n]) {
                res[i] += map[n]
            }
            //此方法可以不断求出puzzleBit的子集
            n = (n - 1) & puzzleBit
        }
    }
    return res
};
// @lc code=end