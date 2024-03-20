//
class Currentuser {
    //
    protected _courseCount = 1 // protected property

    // private method -
    private deleteToken() {
        console.log('Token Deleted')
    }

    public email: string
    private name: string
    readonly city: string = 'Ahmedabad'

    constructor(email: string, name: string) {
        ;(this.email = email), (this.name = name)
    }

    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // getter for private property
    get courseCount(): number {
        return this._courseCount
    }

    // setter for private property
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be higher than 1')
        }
        this._courseCount = courseNum
    }
}

//
class SubUser extends Currentuser {
    isFamily: boolean = true

    changeCourseCount(){
        this._courseCount = 4   // accessing protected property with inheritance
    }
}

const cUser = new Currentuser('hdb@email.com', 'dsjb')
