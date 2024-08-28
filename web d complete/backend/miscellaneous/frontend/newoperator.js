function Person(name,marks){
    this.name = name ;
    this.marks = marks ;
   // console.log(this)
}
Person.prototype.talk=()=>{
    console.log(`welcome to talking season of ${this.name}`)
}
let p1 = new Person("aman",45);
let p2 = new Person("eve",235);
// if we not use p1 and p2 with new keyword ;
// person("aman",34) ;
// then window object will be there ;
