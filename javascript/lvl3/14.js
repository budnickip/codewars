/*  
N smallest elements in original order

Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just 
throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []

*/

function firstNSmallest(array, n){ 
    let min;
    let minArray = []
    let arr2 = [...array]
    const result = []
    for(let i = 0; i < n; i++){
        min = Math.min(...arr2)
        minArray.push(min) 
        arr2 = arr2.slice(0,arr2.indexOf(min)).concat(arr2.slice(arr2.indexOf(min)+1))
    }
    array.forEach(item => {
        for(let i = 0; i < minArray.length; i++){
            if(item == minArray[i]){
                result.push(item)
                minArray = minArray.slice(0,i).concat(minArray.slice(i+1))
                break;
            }
        }
    })
    return result;
}    

console.log(firstNSmallest([1,2,3,4,5],3), [1,2,3])
console.log(firstNSmallest([5,4,3,2,1],3), [3,2,1])
console.log(firstNSmallest([1,2,3,1,2],3), [1,2,1])

/*
znaleźć trzy najmniejsze liczby
1,1,2 na przykład - dodać je do nowej talbicy tablicy.
Przeszukiwać oryginalną tablicę od początku do końca
jeśli napotka na element z nowej tablicy, to dodaje go do nowej tablicy, a ze starej usuwa ten element.
*/

/*
inne rozwiązanie:
function firstNSmallest(array, n){
 while(array.length != n) {
   array.splice(array.lastIndexOf(Math.max(...array)), 1)
   }
   return array
 }

*/