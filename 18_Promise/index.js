// console.log("We are learning promises right now...")

// promise

// Pending => shyaam ne request kiaa
// Fulfilled => ram ne 100 de diye => resolve => .then
// Rejected => ram ne 100 nhi diye => reject => .catch

let promise = new Promise((resolve,reject)=>{

  let num = '10';

  if(num === 10){resolve("num is 10")}
  else{reject("num is not a number")}
})

promise.then((message)=>console.log(message)).catch((message)=>console.log(message))
