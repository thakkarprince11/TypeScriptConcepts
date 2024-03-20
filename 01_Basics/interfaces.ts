// interface -

interface Model {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrail: () => string // a function that returns string
    getCoupon(couponName: string): number
}

// ReOPen interface -
interface Model {
    gitHubId: string
}

const user: Model = {
    dbId: 22,
    email: 'abc@email.com',
    userId: 123,
    startTrail: () => {
        return 'this is trail function'
    },
    getCoupon(couponName: 'off10') {
        return 10
    },
    gitHubId: 'abc@github.com'
}

user.email = 'anyone@email.com'
//user.dbId = 1233                  // readonly

user.googleId = 'gmailId' // optional

// inheritance of interface -
interface Superadmin extends Model {
    role: 'admin' | 'ta' | 'learner'
}

const newAdmin : Superadmin = {
    dbId : 55,
    email : 'kjdf@email.com',
    userId : 122,
    googleId : "bh@gmail.com",
    startTrail() {
        return "trail started"
    },
    getCoupon(couponName : 'discount20') {
        return 20
    },
    gitHubId : 'ba@github.com',
    role : 'admin'
}
