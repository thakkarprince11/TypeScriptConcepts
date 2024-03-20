// Detection -
function detectTypes(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    if (typeof val === 'number') {
        return val + 3
    }
}

function provideId(id: string | null) {
    if(!id){
        console.log("Please provide id")
        return
    }
    id.toLowerCase()
}


//
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }