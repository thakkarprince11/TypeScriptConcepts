"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
function addTwo(num) {
    //num.toUpperCase()
    return num + 2;
}
addTwo(5);
function getUpperCase(value) {
    return value.toUpperCase();
}
getUpperCase('hello');
//getUpperCase(4)
function signUp(name, email, isPaid) {
    return [name, email, isPaid];
}
signUp('new', 'new@email.com', true);
// Default Value for isPaid
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
};
loginUser("a", "a@email.com");
// Strict Return Function
function strictReturnFunction(name) {
    return name.toUpperCase();
}
