//
const scoreIPL: Array<number> = []
const teamNames: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

// Generics -
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)
identityThree('3')

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string
    type: number
}

function identityFive<Bottle>(val: Bottle): Bottle {
    return val
}

identityFive({ brand: '', type: 1223 })

// Array in Argument
function getSearchProducts<Type>(products: Type[]): Type {
    // do some database operations 
    const myIndex = 3
    return products[myIndex]
}



// Arrow Function with Generics - 
const getMoreSearchProducts = <Type,>(products : Array<Type>) : Type => {
     // do some database operations 
     const myIndex = 4
     return products[myIndex]
}

export {}
