//
var Startuser = /** @class */ (function () {
    function Startuser(email, name) {
        this._courseCount = 1; // private property
        this.city = 'Ahmedabad';
        ;
        (this.email = email), (this.name = name);
    }
    // private method -
    Startuser.prototype.deleteToken = function () {
        console.log('Token Deleted');
    };
    Object.defineProperty(Startuser.prototype, "getAppleEmail", {
        // getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Startuser.prototype, "courseCount", {
        // getter for private property
        get: function () {
            return this._courseCount;
        },
        // setter for private property
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error('Course count should be higher than 1');
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return Startuser;
}());
var sUser = new Startuser('nm@email.com', 'kxjnvc');
// sUser.deleteToken()          // private method can't access outside
