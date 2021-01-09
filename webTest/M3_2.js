function test() {
    let input = "1,2,3,4,4,6,7"
    let arr = input.split(",")
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const pos = i + 1
        if (!(pos & 1)) {
            res.push(arr[i])
        } else if (i && arr[i] === arr[i - 1]) {
            res.push(arr[i])
        }
    }
    console.log(res.join(","));
}

test()