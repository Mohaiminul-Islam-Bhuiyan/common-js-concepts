/**
 8 ways to get undefined

1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will retlurn undefined
5. property that doesnot exixts on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined

 */


let first;

function second(a, b){
    const total = a+b;
}

const result = second();

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
third(2, 5)

function noNegative (a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}

const fifth = {
    id: 2, 
    name: 'ponchom',
    age: 45
}
// console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 54]
// you should not do it use splice
delete sixth[1];
console.log(sixth[1], sixth[200])


const eighth = undefined; // should not be used
const ninth = null; // instead of undefined use null
const data = {results: [], updated: null}

console.log(typeof null)