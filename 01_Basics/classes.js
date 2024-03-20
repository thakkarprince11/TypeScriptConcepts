// class
// class Enduser {
//     public email: string
//     private name: string
//     readonly city: string = 'Ahmedabad'
//     constructor(email: string, name: string) {
//         ;(this.email = email), (this.name = name)
//     }
// }
var Enduser = /** @class */ (function () {
    function Enduser(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'Ahmedabad';
        this.email = email;
        this.name = name;
    }
    return Enduser;
}());
var euser = new Enduser('djb@email.com', 'jfv');
// euser.name                   // name is private 
