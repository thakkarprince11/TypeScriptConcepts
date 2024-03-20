//
class Startuser {
    private _courseCount = 1 // private property

    // private method -
    private deleteToken(){
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

const sUser = new Startuser('nm@email.com', 'kxjnvc')

// sUser.deleteToken()          // private method can't access outside
