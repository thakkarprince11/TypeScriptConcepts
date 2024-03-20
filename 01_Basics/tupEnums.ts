// Tuple -
const tupleUser: [string, number, boolean] = ['abc', 131, true] // Order Strict Types

let rgb: [number, number, number] = [255, 255, 255]

type user = [number , string]


const newUser : user = [112, "abc@email.com"]

newUser[1] = "new@email.com"
//newUser.push(true)

export {}
