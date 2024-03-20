// class
// class Enduser {
//     public email: string
//     private name: string
//     readonly city: string = 'Ahmedabad'

//     constructor(email: string, name: string) {
//         ;(this.email = email), (this.name = name)
//     }
// }


class Enduser {
    readonly city: string = 'Ahmedabad'

    constructor(public email: string, private name: string) {
        this.email = email;
        this.name = name
    }
}

const euser = new Enduser('djb@email.com', 'jfv')
// euser.name                   // name is private 