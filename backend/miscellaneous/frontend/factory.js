function person(name,age){
    const person = {
        name : name ,
        age : age ,
        talk(){
            console.log(`printed ${this.name}`) ;
        },
    }
    return person ;
}
let c1 = person("ram",23)
let c2 = person("jago",45)