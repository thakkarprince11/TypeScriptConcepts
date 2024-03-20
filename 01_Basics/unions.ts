// Union -

let score: number | string = 33

score = 44
score = '55'

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let FirstUser: User | Admin = { name: '', id: 123 }

FirstUser = { username: 'abc', id: 56 }

//
function getDbID(id: number | string) {
    console.log(`DB id is : ${id}`)
}

getDbID(3)
getDbID('3')

//
function getSomeID(id: number | string) {
    if (typeof id === 'string') {
        id.toUpperCase()
    }
    if (typeof id === 'number') {
        id + 2
    }
}

// Array -

const data: number[] = [1, 2, 3, 4]

const data2: string[] = ['1', '2', '3', '4']

const data3: string[] | number[] = ['1', '2', '3', '4']

const data4: (string | number)[] = ['1', 2, '3', 4]

const data5: (string | number | boolean)[] = ['1', 2, '3', 4, true, false]

// pi
let pi: 3.14 = 3.14 // strict custom type of 3.14
//pi = 3.145                  // now pi's value can't be changed

let seatAllotment: 'aisle' | 'middle' | 'window'        // Only Three Strict Type assigned
seatAllotment = 'aisle'
