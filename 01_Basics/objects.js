"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
var User = {
    name: 'one',
    email: 'one@email.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: 'one', isActive: false });
function createCourse() {
    return { name: 'reactjs', price: 1000 };
}
var newUser = { name: 'two', isActive: true, email: 'two@email.com' };
createUser(newUser);
function createAccount(user) {
    return { name: '', email: '', isActive: true };
}
createAccount({ name: '', email: '', isActive: true });
var myCar = {
    _id: '1156',
    name: 'Model A',
    brand: 'Tesla',
    price: 1000000
};
