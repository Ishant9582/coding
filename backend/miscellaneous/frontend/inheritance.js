class parent{
    constructor(name,classs){
        this.name = name;
        this.classs = classs
    }
    try(){
        console.log(`dear ${this.name} `)
    }
}
class student extends parent{
    constructor(name,classs,category){
        super(name,classs) ;
        this.category = category ;
    }
    
}
class teacher extends parent{
    constructor(name,classs,experience){
        super(name,classs);
        this.experience = experience;
    }
}
let c = new student("a","btech it 1 year" , "a")
let t = new teacher("p","btech it 3 year" , 6)