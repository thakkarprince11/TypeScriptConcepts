//

interface Database {
    connection: string
    username: string
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, { connection: 'dj', username: 'jdbk', password: 'kndf' })

// class
interface Quiz {
    name: string
    type: string
}

interface Course {
    name: string
    author: string
    subject: string
}

class Sellable<Type> {
    public cart: Type[] = []

    addToCart(products: Type) {
        this.cart.push(products)
    }
}

export {}
