/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = []
    const getTrie = (words) => {
        const root = Object.create(null)
        for (const word of words) {
            let node = root
            for (const c of word) {
                if (!node[c]) {
                    node[c] = Object.create(null)
                }
                node = node[c]
            }
            node.EndWord = word
        }
        return root
    }
    const dfs = (trie, x, y) => {
        if (trie.EndWord) {
            res.push(trie.EndWord)
            trie.EndWord = null
        }
        if (x < 0 || y < 0 || x >= n || y >= m || !trie[board[x][y]]) {
            return
        }
        const temp = board[x][y];
        board[x][y] = "#";
        [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ].forEach(move => {
                dfs(trie[temp], move[0] + x, move[1] + y)
            })
            //回溯
        board[x][y] = temp
    }
    const n = board.length
    const m = board[0].length
    const trie = getTrie(words)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            dfs(trie, i, j)
        }
    }
    return res
};
// @lc code=end