const phone = {
  brand: "Apple",
  model : "Iphone16",
  price : 750000,
  ram : "4gb",
  rom : "64gb",
  camera: "12MP"
}
// for in 
for(let key in phone){
  console.log(key,phone[key])

}

// for of 

let arr = [1,2,3,4,5];

// for (const element of arr) {
//   console.log(element);
// }

// forEach

arr.forEach((value,index,arr)=>console.log(value,index,arr));

