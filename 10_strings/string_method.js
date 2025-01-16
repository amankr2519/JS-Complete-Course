// methods

let str = "Suman";

// length
console.log(str.length)

// toUpperCase
console.log(str.toUpperCase());
console.log(str);

// toLowerCase
console.log(str.toLowerCase());

// includes
console.log(str.includes('a'));

// indexof
console.log(str.indexOf('m'));
console.log(str.indexOf('k')); //-1

// trim
str = " Suman ";
console.log(str.length);
console.log(str.trim().length);

// substring

let str1 = 'best javascript mastery course on youtube';

let substring = str1.substring(5,15);
console.log(substring)

// slice can use in both array and string . 
console.log(str1.slice(5,15));

// replace(old,new)
console.log(str1.replace('best','BEST'));

// split
let str2 = "best, javascript mastery, course on youtube";
let result1 = str2.split(" ");
let result2 = str2.split(",");
console.log(result1);
console.log(result2);


// charAt
let str3 = "suman";
console.log("str3.charAt(0) - ",str3.charAt(0));
console.log("str3.charAt(10) - ",str3.charAt(10));
