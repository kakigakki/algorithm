// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    let scoreNow = input[0].split(" ")[1]
    let str = input[1]
    for (const c of str) {
        if (c === "x") {
            if (scoreNow > 0) scoreNow--
        } else {
            scoreNow++
        }
    }
    console.log(scoreNow < 0 ? 0 : scoreNow);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));