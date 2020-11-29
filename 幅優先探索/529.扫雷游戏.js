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
    const [x, y] = click
    if (board[x][y] === "M") {
        board[x][y] = "X"
        return board
    }
    let n = board.length
    let m = board[0].length
    let visited = new Set()
    let queue = [click]
    while (queue.length) {
        const [x, y] = queue.shift()
        if (x < 0 || y < 0 || x >= n || y >= m || visited.has(x * 50 + y)) continue
            //判断是否点到的是B，然后进行递归搜索
        const move = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [-1, -1],
            [1, 1],
            [-1, 1],
            [1, -1]
        ]
        let count = 0
        let subQueue = []
        for (const dirction of move) {
            const newX = x + dirction[0]
            const newY = y + dirction[1]
            subQueue.push([newX, newY])
            if (board && board[newX] && board[newX][newY] === "M") {
                count++
            }
        }
        visited.add(x * 50 + y)
        if (count === 0) {
            board[x][y] = "B"
            queue.push(...subQueue)
        } else {
            board[x][y] = count + ""
        }
    }
    return board
};
// @lc code=end