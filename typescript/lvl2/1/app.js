function solution(str, ending) {
    return ending ? str ? str.endsWith(ending) : false : true;
}
console.log(solution('abcde', 'cde'), " true");
console.log(solution('abcde', 'abc'), " false");
console.log(solution('abc', ''), " true");
