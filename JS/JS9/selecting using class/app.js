let a  = document.getElementsByClassName("oldImg") ;
//for getting all objects present
console.dir(a)
for(let i = 0 ; i<a.length ; i++){
    console.dir(a[i]);
}
//
// for only getting the src present in each
// for(let i = 0 ; i<a.length ; i++){
//     console.dir(a[i].src);
// }

//
// in order to change src

for(let i = 0 ; i<a.length ; i++){
    a[i].src ="./assets/creation_2.jpeg";
    console.log("changed") ;
} ;
