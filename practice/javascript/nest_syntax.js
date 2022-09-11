const arr = [1, 2, 3, 4, 5]
// 残りの値をcに割り当てる
const [a, b, ...c] = arr
console.log(arr) // [ 1, 2, 3, 4, 5 ]

const obj = { a: 1, b: 2, c: 3, x: 10}
// x以外の値がすべて割り当てられる
const { x, ...props } = obj
console.log(x, props) // 10 { a: 1, b: 2, c: 3 }