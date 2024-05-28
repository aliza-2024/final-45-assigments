"use strict";
// lower case
let personName = "Aliza";
console.log("lowercase:", personName.toLowerCase());
//printing a person name in uppercase 
console.log("uppercase:", personName.toUpperCase());
//printing a person name in a tilltecase
console.log("tittlecase:", personName.replace(/\bw/g, c => toUpperCase()));
