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
var updateBoard = function (board, click) {
  const [x, y] = click;
  if (board[x][y] === "M") {
    board[x][y] = "X";
    return board;
  }
  let queue = [click];
  let n = board.length;
  let m = board[0].length;
  let visited = new Set();
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x >= n || x < 0 || y >= m || y < 0 || visited.has(50 * x + y)) continue;
    let count = 0;
    let subQueue = [];
    [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ].forEach((move) => {
      subQueue.push([move[0] + x, move[1] + y]);
      if (
        board &&
        board[move[0] + x] &&
        board[move[0] + x][move[1] + y] === "M"
      ) {
        count++;
      }
    });
    visited.add(50 * x + y);
    if (!count) {
      queue.push(...subQueue);
      board[x][y] = "B";
    } else {
      board[x][y] = count + "";
    }
  }
  return board;
};
// @lc code=end
