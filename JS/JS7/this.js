
const student = {
    name : "hello" ,
    class : 12 ,
    eng : 45 ,
    hindi : 60 ,
    france : 55 ,
    getavg(){
        console.log(this) ;
       // console.log(a)        //error
        let avg = (this.eng + this.hindi + this.france)/3 ;
        //or
        //let avg = (student.eng + student.hindi + student.france)/3 ;
        console.log(`avg marks of ${this.name} is ${avg}`) ;
    }
}
function getwindow(){
    console.log(this)    ;
}
student.getavg();
getwindow();
