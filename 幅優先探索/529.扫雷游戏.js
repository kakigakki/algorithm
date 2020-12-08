/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 *
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let visited = new Set()
    const [c1, c2] = click
    if (board[c1][c2] === "M") {
        board[c1][c2] = "X"
        return board
    }
    const n = board.length
    const m = board[0].length
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const queue = [click]
            while (queue.length) {
                const [x, y] = queue.shift()
                if (x >= n || x < 0 || y >= m || y < 0 || visited.has(x * 50 + y)) continue
                const subQueue = [];
                let mineNum = 0;
                [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1],
                    [1, 1],
                    [1, -1],
                    [-1, 1],
                    [-1, -1]
                ].forEach(move => {
                    const newX = move[0] + x
                    const newY = move[1] + y
                    subQueue.push([newX, newY])
                    if (board[newX] && board[newX][newY] === "M") {
                        mineNum++
                    }
                })
                if (mineNum) {
                    board[x][y] = mineNum + ""
                } else {
                    queue.push(...subQueue)
                    board[x][y] = "B"
                }
                visited.add(x * 50 + y)
            }
        }
    }
    return board
};
// @lc code=end