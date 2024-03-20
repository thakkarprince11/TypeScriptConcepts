// instance of narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

// Type Predicates

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return 'Fish Food'
    } else {
        pet
        return 'Bird Food'
    }
}

// Discriminated unions -
interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    side: number
}

interface Rectangle {
    kind: 'rectangle'
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    }
    if (shape.kind === 'square') {
        return shape.side * shape.side
    }
}

// Never Type Checking

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

