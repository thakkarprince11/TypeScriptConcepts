//
function addTwo(num: number) {
    //num.toUpperCase()
    return num + 2
}

addTwo(5)

function getUpperCase(value: string) {
    return value.toUpperCase()
}

getUpperCase('hello')
//getUpperCase(4)

function signUp(name: string, email: string, isPaid: boolean) {
    return [name, email, isPaid]
}

signUp('new', 'new@email.com', true)

// Default Value for isPaid
const loginUser = (email: string, name: string, isPaid: boolean = false) => {
    console.log(name, email, isPaid)
}

loginUser('a', 'a@email.com')

// Strict Return Function
function strictReturnFunction(name: string): string {
    return name.toUpperCase()
}

//
function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return '200 OK'
}

//

const getHello = (s: string): string => {
    return s
}

const heros = ['thor', 'superman', 'spiderman']

heros.map((heros): string => {
    return `hero is ${heros}`
})

const superheros = [1, 2, 3]

superheros.map((superheros) => {
    return 1
})

function consoleError(err: string) : void {
    console.log(err)
}

consoleError("this is error")

function handleError(err: string) : never {
    throw new Error(err)
}

handleError("Errrrrrrrror")

export {}
