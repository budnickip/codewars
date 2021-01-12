enum Alphabet {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}
const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
function position(alphabet:string):string {
  return `Position of alphabet: ${abc.indexOf(alphabet)+1}`;
 //return "Position of alphabet: " + Alphabet.alphabet
}
console.log(position("a")," Position of alphabet: 1")
console.log(position("z"),"Position of alphabet: 26")
console.log(position("e"),"Position of alphabet: 5")