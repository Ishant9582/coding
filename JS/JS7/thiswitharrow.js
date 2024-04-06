const a = {
    name : "aman " ,
    class : 6 ,
    marks : 67 ,
    prop : this ,       // global scope
    getname : function(){
        console.log(this) ;    // this here is of function so dont depend on parent      here this refers to a
        console.log(a.name) ;
    },
    getmarks : () =>{
        console.log(this)   ;  // here this depends on parent hence this refers to window
        console.log(this.marks) ;
    } ,
    getinfo1 : function(){
        setTimeout(function(){
            console.log(this)        // here this refers to window object as settimeut ko window call krta hai
        },2000) ;
    },
    getinfo2:function(){
        setTimeout(()=>{
            console.log(this)            // here this refers to a as function upper this o refer kr rha and vo this a ko kr rha as it is arrow so parent depend
        } ,2000) ;
    }
}
a.getname();
a.getmarks();
a.getinfo1();
a.getinfo2();
