"use strict";
let shwMsg = true;
function Details(name, age, salary) {
    let test = true;
    if (shwMsg) {
        return `name is ${name} , age ${age} ${test} , salary ${salary}`;
    }
}
console.log(Details("ahmed", 22, 3444)); // dsds
