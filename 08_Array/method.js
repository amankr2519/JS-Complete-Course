let arr = [1,2,3,4,5];
console.log("Array - ",arr);

// Push
arr.push(6);
console.log("Push 6 - ",arr);

// pop
arr.pop();
console.log("Pop - ",arr);

// shift
arr.shift();
console.log("Shift - ",arr)

// unshift
arr.unshift(0);
console.log("Unshift 0 - ",arr)

// length
console.log("Length of an array - ",arr.length)

// find -> Return the first element  that satisifes the provided testing function 

let found = arr.find((element)=> element >2);
console.log("find method - ",found)

// concatenation 
let arr1 = ["ram","shyam","monhan","raju"];
let merged = arr.concat(arr1)
console.log(merged);
// console.log(arr);

// join
let array = ['suman', 'wdm','webDevMastery']
let result = array.join('-')
console.log(result)

// splice 
let arr2 = [11,12,13,14,15];
arr2.splice(1,3,101,102,103);
console.log(arr2)

// slice
let a1 = [1,2,3,4,5];
let slice = a1.slice(0,3);
console.log(slice)

// sort
console.log(arr.sort((a,b)=>a-b)) // increament 
console.log(arr.sort((a,b)=>b-a)) // Decreament 

// findIndex
let a2 = [10,20,30,40,50]
console.log(a2.findIndex((el)=> {
  if(el === 30){
    return el;
  } 
}))

// Array.from()

let str = "webdevmastery";
str = Array.from(str);
// console.log(Array.from(str))

//Array.isArray()
console.log(Array.isArray(arr))
console.log(Array.isArray(str))











