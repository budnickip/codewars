function index(array: number[], n: number): number {
    return array.length <= n ? -1 : Math.pow(array[n], n);
  }

console.log(index([1, 2, 3, 4], 2) + " 9")
console.log(index([1, 3, 10, 100], 3) + " 1000000")
console.log(index([0, 1], 0) + " 1")
console.log(index([5,6,9,4], 4) + " -1")