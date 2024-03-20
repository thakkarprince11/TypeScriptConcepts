"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
var scoreIPL = [];
var teamNames = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generics -
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree('3');
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
identityFive({ brand: '', type: 1223 });
// Array in Argument
function getSearchProducts(products) {
    // do some database operations 
    var myIndex = 3;
    return products[myIndex];
}
// Arrow Function with Generics - 
var getMoreSearchProducts = function (products) {
    // do some database operations 
    var myIndex = 4;
    return products[myIndex];
};
