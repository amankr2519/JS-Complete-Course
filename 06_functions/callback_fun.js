console.log("We are learning callback function");

const print = ()=>{
  console.log("printing press");
}

const test = (name,callback)=>{
  console.log("Inside the test function ",name);
  callback();
}

test('aman',print);
