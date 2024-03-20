//
abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void

    getReelTime() : number{
        // some complex calculation 
        return 7
    }
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst : number) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('Sepia')
    }
}

const instaUser = new Instagram('Auto', 'None', 3)

instaUser.getSepia()
instaUser.getReelTime()