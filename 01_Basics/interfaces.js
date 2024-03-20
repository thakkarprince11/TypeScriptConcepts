// interface -
var user = {
    dbId: 22,
    email: 'abc@email.com',
    userId: 123,
    startTrail: function () {
        return 'this is trail function';
    },
    getCoupon: function (couponName) {
        return 10;
    },
    gitHubId: 'abc@github.com'
};
user.email = 'anyone@email.com';
//user.dbId = 1233                  // readonly
user.googleId = 'gmailId'; // optional
var newAdmin = {
    dbId: 55,
    email: 'kjdf@email.com',
    userId: 122,
    googleId: "bh@gmail.com",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (couponName) {
        return 20;
    },
    gitHubId: 'ba@github.com',
    role: 'admin'
};
