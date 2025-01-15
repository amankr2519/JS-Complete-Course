console.log("We are learning objects");

//person
// phone
// car

const person = {
  name : "Rahul",
  age : 20 ,
  roll_no : 100,
  branch : "Aiml",
  college : "Usar"
}

// console.log(person);
console.log(person.name,person.age);

const phone = {
  name : "Iphone16",
  price : 750000,
  ram : "4gb",
  rom : "64gb",
  camera: "12MP"
}

// spread operator
const phone2 = {...phone, name:"Galaxy s24",camera:"50MP",ram:"8gb"};

console.log(phone2);

// Destructuring

const {name , price , camera , ram } = phone;

console.log(name,camera,price,ram);

