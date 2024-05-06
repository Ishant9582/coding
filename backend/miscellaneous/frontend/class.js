class P{
    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    talk(){
        console.log(`name is ${this.name}`)
    }
}
let r = new P("adam",34);