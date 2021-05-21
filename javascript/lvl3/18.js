/*
Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

function strToHash(str){
    const obj = {}
    str.split(', ').forEach(a => obj[a.slice(0,a.indexOf('='))] = +a.slice(a.indexOf('=')+1) )
    return str.length > 0 ? obj : {}
  }

  console.log( strToHash("a=1, b=2, c=3, d=4"), { 'a': 1, 'b': 2, 'c': 3, 'd': 4})
  console.log( strToHash(""), {})
  console.log( strToHash("MnOp=50, I=94, GhIj=776, hIjK=620"))