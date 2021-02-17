/* 
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

Test.describe("Example tests",_=>{
Test.assertSimilar(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false]);
Test.assertSimilar(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]); 
Test.assertSimilar(bears(8, '8'), ["",false]); 
});
*/

function bears(x, s){
    const regex = /B8|8B/g
    if(s.match(regex)) return [s.match(regex).join(''), s.match(regex).join('').length/2 >= x]
    else if(x>0) return ["",false]
    else return ["",true]
}

console.log(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false])
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true])
console.log(bears(8, '88i8aBeBBlB'))
//console.log(bears(8, '8'), ["",false])