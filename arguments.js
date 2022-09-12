// array like Object 
function sum(a, b, c){
    console.log(arguments)
    const args = [...arguments]
    console.log(args)
    const result = a + b + c;
    return result;
}

// console.log(arguments)
const total = sum(45, 34, 67, 56, 90, 92);
// console.log(total);

console.log(typeof sum)
console.log(sum.length) // number of parameters