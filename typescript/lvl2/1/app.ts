interface String {    
  endsWith(searchString: string, endPosition?: number): boolean;
}

function solution(str: string, ending: string): boolean {
  return ending ? str ? str.endsWith(ending) : false : true
}
console.log(solution('abcde', 'cde'), " true")
console.log(solution('abcde', 'abc'), " false")
console.log(solution('abc', ''), " true")