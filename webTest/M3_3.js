function test(input) {
    const csvArr = input.split("\n")
    const scores = csvArr.splice(1).map(item => item.split(","))
    const subjectCounts = csvArr[0].split(",").length
    const sums = new Array(subjectCounts).fill(0)
    for (let j = 0; j < subjectCounts; j++) {
        for (let i = 0; i < scores.length; i++) {
            sums[j] += +scores[i][j]
        }
    }
    const avg = sums.map(item => Math.round(item / subjectCounts)).join(",")
    let res = csvArr[0] + "\n" + avg
    console.log(res);
}

const input = "Japanese,Mathematics,History,Science\n71,43,75,68\n69,89,54,77\n89,76,49,98\n79,61,54,83"

test(input)