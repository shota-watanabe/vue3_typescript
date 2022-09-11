// 変数に入れる場合（constでなくletでもいい）
const variableHello = function(name){
 let message = 'hello,' + ' ' + name + 'さん'
 return message
}
const result1 = variableHello('variable')
console.log(result1)

// アロー関数
const allowHello = name => {
 let message = 'hello,' + ' ' + name + 'さん'
 return message
}

const result2 = allowHello('allow')
console.log(result2)

function basicHello(name){
 let message = 'hello,' + ' ' + name + 'さん'
 return message
}

const result3 = basicHello('basic')
console.log(result3)