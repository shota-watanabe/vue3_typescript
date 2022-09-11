// 型アノテーションをつけることが推奨されている
const example: string = 'example'

const hello = (name: string) => {
  return 'hello' + ' ' + name + 'さん'
}

const result = hello('john')
console.log(result)