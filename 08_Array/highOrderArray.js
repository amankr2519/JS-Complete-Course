// map
let arr = [1,2,3,4];
let doubled = arr.map((el)=>el*2)
console.log(doubled)

// filter

let evenNo = arr.filter((item)=>item%2===0)
console.log(evenNo)

// reduce

let sum = arr.reduce((prev,ele)=>prev+ele,0);
console.log(sum)
// prev + ele => 0 
// 0  +  1  => 1 
// 1  + 2 => 3
// 3 + 3 => 6
// 6 + 4 => 10
// sum => 10

