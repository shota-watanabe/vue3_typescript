// オブジェクトをconstで定義しても、中身のプロパティは変更できる
const obj = {a: 1, b: 2, d: 3}
console.log(obj.a)

const obj2 = obj
obj.a = 10
console.log(obj2) // { a: 10, b: 2, d: 3 }