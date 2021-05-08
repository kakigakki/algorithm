/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const adjList = new Map()

    for (let { id, ...rest }
        of employees) {
        adjList.set(id, rest);
    }

    function callDFS(node) {
        let sum = adjList.get(node).importance;

        for (let next of adjList.get(node).subordinates) {
            sum += callDFS(next);
        }
        return sum;
    }
    return callDFS(id)
};
// @lc code=end