// instance of narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'Fish Food';
    }
    else {
        pet;
        return 'Bird Food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    if (shape.kind === 'square') {
        return shape.side * shape.side;
    }
}
// Never Type Checking
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return shape.side * shape.side;
        case "rectangle": return shape.length * shape.width;
        default:
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}
