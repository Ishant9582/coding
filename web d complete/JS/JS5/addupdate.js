let student = {
    name : "hello" ,
    age : 29 ,
    marks : 90 ,
    city : "delhi" , 
}
console.log("before updation") ;
console.log(student) ;
student.marks = 89 ;
console.log("after updation") ;
console.log(student) ;
student.members = 9 ;
console.log(student) ;
delete student.city ;
console.log("after deletion") ;
console.log(student) ;
console.log(student["age"]) ;