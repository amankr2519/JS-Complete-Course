let globalVar = 100;

const display = ()=>{
  console.log("Inside the display function");
  console.log(`globalVar - ${globalVar}`);

}

display();
console.log(`Outside function - ${globalVar} `)

if(true){
  let value = 10;
  console.log(value);
}

console.log(value); // This line thrown an error . 

