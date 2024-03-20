var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//
var Currentuser = /** @class */ (function () {
    function Currentuser(email, name) {
        //
        this._courseCount = 1; // protected property
        this.city = 'Ahmedabad';
        ;
        (this.email = email), (this.name = name);
    }
    // private method -
    Currentuser.prototype.deleteToken = function () {
        console.log('Token Deleted');
    };
    Object.defineProperty(Currentuser.prototype, "getAppleEmail", {
        // getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Currentuser.prototype, "courseCount", {
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
    return Currentuser;
}());
//
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4; // accessing protected property with inheritance
    };
    return SubUser;
}(Currentuser));
var cUser = new Currentuser('hdb@email.com', 'dsjb');
