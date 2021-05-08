function dirReduc(arr) {
    const stack = []
    for (let i = 0; i < arr.length; i++) {
        const dir = arr[i]
        if (dir === "NORTH" && stack[stack.length - 1] === "SOUTH") {
            stack.pop()
        } else if (dir === "WEST" && stack[stack.length - 1] === "EAST") {
            stack.pop()
        } else if (dir === "SOUTH" && stack[stack.length - 1] === "NORTH") {
            stack.pop()
        } else if (dir === "EAST" && stack[stack.length - 1] === "WEST") {
            stack.pop()
        } else {
            stack.push(dir)
        }
    }
    return stack
}