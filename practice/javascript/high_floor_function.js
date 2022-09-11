// フィルター関数
const words = ['spray', 'limit', 'elite']
// wordという引数を取るアロー関数
// filter...配列に対して使える組み込みの高階関数
// かっこ内はreturnを省略している
const result1 = words.filter(word => word.length >= 1)
console.log(result1)

// アロー関数を使わない場合
// 真偽値を返す関数
const filtering = (word) => {
 return word.length >= 1
}
const result2 = words.filter(filtering)
console.log(result2)


const array = [1, 4, 9, 16]
// mapという高階関数を使って、引数に対して関数を与える
// 引数の返り値で構成される配列を返す
// それぞれの要素を2倍したものを返している
const mappedArray1 = array.map(x => x * 2)
console.log(mappedArray1) // [ 2, 8, 18, 32 ]

// アロー関数を使わない場合
const mapping = (x) => {
return x * 2
}
const mappedArray2 = array.map(mapping)
console.log(mappedArray1)