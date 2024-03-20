//
const User = {
    name: 'one',
    email: 'one@email.com',
    isActive: true
}

function createUser({ name: string, isActive: boolean }) {}

createUser({ name: 'one', isActive: false })

function createCourse(): { name: string; price: number } {
    return { name: 'reactjs', price: 1000 }
}

let newUser = { name: 'two', isActive: true, email: 'two@email.com' }

createUser(newUser)

// Type Aliases -
type User = {
    name: string
    email: string
    isActive: boolean
}

function createAccount(user: User): User {
    return { name: '', email: '', isActive: true }
}

createAccount({ name: '', email: '', isActive: true })

//
type Car = {
    readonly _id: string // readonly
    name: string
    brand: string
    price: number
    creditcard?: number
}

let myCar: Car = {
    _id: '1156',
    name: 'Model A',
    brand: 'Tesla',
    price: 1000000
}

//myCar._id = "dhjfbhj"

// Combine Multiple Type Alias

type cardNumber = {
    num: string
}

type cardExpiry = {
    expiry: string
}


type cardDetails = cardNumber & cardExpiry & {
    cvv : number
}

export {}
